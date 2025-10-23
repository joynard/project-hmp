import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NewsService, Berita, Comment } from '../services/data.berita';
import { AuthService } from '../services/auten.pengguna';

// Import Swiper untuk slider gambar jika dipakai di HTML
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-baca-berita',
  templateUrl: './baca-berita.page.html',
  styleUrls: ['./baca-berita.page.scss'],
  standalone:false,
})

export class BacaBeritaPage implements OnInit {
  // Variabel untuk menampung berita (objek)
  berita: Berita | undefined;

  // Menyimpan text komentar user
  newCommentText: string = '';

  // Text balasan pada komentar tertentu
  replyText: string = '';

  // Menyimpan rating bintang aktif oleh user saat ini
  currentRating: number = 0;

  constructor(
    private router: Router, // Navigasi antar halaman
    private newsService: NewsService, // Service untuk ambil data berita
    private alertController: AlertController, // Popup alert Ionic
    private authService: AuthService // Service autentikasi user
  ) {

    // Ambil parameter (id berita) yang dikirim dari halaman sebelumnya
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state && nav.extras.state['beritaId']) {

      // Ambil ID berita
      const beritaId = nav.extras.state['beritaId'];

      // Ambil data berita sesuai ID dari service data.berita.ts
      this.berita = this.newsService.getBeritaById(beritaId);
    }
  }

  ngOnInit() {

    // Kalau tidak ada ID berita (direct akses), kembali ke Home
    if (!this.berita) {
      this.router.navigate(['/tabs/home']);
    } else {

      // Cek user yang sedang login
      const currentUser = this.authService.getCurrentUser();

      // Cari apakah user ini pernah memberi rating
      const userRating = this.berita.rating.find(
        r => currentUser && r.user === currentUser.username
      );

      // Kalau ada → tampilkan rating sebelumnya
      this.currentRating = userRating ? userRating.value : 0;
    }
  }

  // Menampilkan/menyembunyikan input balasan pada komentar
  toggleReply(comment: Comment) {
    comment.showReply = !comment.showReply;
  }

  // Menambahkan balasan komentar ke daftar replies
  addReply(comment: Comment) {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser && this.replyText.trim() !== '') {

      // Push data balasan baru
      comment.replies.push({ user: currentUser.username, text: this.replyText });

      // Reset input
      this.replyText = '';
      comment.showReply = false;
    }
  }
  
  // Menandai berita favorit atau tidak
  toggleFavorite() {
    if (this.berita) {
      this.berita.isFavorite = !this.berita.isFavorite;
    }
  }

   // Menambahkan atau mengganti rating bintang
  async addRating(rating: number) {
    const currentUser = this.authService.getCurrentUser();
    if (!this.berita || !currentUser) return;

    // Cek apakah user pernah kasih rating sebelumnya
    const existingRating = this.berita.rating.find(
      r => r.user === currentUser.username
    );

     // Jika ada → update rating
    if (existingRating) {
      existingRating.value = rating;
    } 
    
     // Jika belum → tambah rating baru
    else {
      this.berita.rating.push({
        user: currentUser.username,
        value: rating});
    }
    this.currentRating = rating;

    // Tampilkan alert terima kasih
    const alert = await this.alertController.create({
      header: 'Terima Kasih!',
      message: `Rating Anda sekarang ${rating} bintang.`,
      buttons: ['OK'],
    });

    await alert.present();
  }

   // Menambahkan komentar user ke list komentar
  addComment() {
    const currentUser = this.authService.getCurrentUser();

    // Pastikan komentar tidak kosong dan user login
    if (this.berita && this.newCommentText.trim() !== '' && currentUser) {

       // Tambahkan komentar baru
      this.berita.comments.push({ 
        user: currentUser.username, 
        text: this.newCommentText,
        replies: [] // Awalnya tidak ada balasan
      });

      // Reset input text
      this.newCommentText = '';
    } 
    
    // Kalau belum login → tampilkan warning
    else if (!currentUser) {
      alert('Anda harus login terlebih dahulu untuk berkomentar.');
    }
  }
}

