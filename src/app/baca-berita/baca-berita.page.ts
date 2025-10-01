import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NewsService, Berita, Comment } from '../services/data.berita';
import { AuthService } from '../services/auten.pengguna';

// 1. Pastikan import ini ada dan dipanggil
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-baca-berita',
  templateUrl: './baca-berita.page.html',
  styleUrls: ['./baca-berita.page.scss'],
  standalone:false,
})
export class BacaBeritaPage implements OnInit {
  berita: Berita | undefined;
  newCommentText: string = '';
  replyText: string = '';

  constructor(
    private router: Router,
    private newsService: NewsService,
    private alertController: AlertController,
    private authService: AuthService
  ) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state && nav.extras.state['beritaId']) {
      const beritaId = nav.extras.state['beritaId'];
      this.berita = this.newsService.getBeritaById(beritaId);
    }
  }

  ngOnInit() {
    if (!this.berita) {
      this.router.navigate(['/tabs/home']);
    }
  }

  toggleReply(comment: Comment) {
    comment.showReply = !comment.showReply;
  }

  addReply(comment: Comment) {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser && this.replyText.trim() !== '') {
      comment.replies.push({ user: currentUser.username, text: this.replyText });
      this.replyText = '';
      comment.showReply = false;
    }
  }
  
  // Fungsi lain tidak berubah
  toggleFavorite() {
    if (this.berita) {
      this.berita.isFavorite = !this.berita.isFavorite;
    }
  }

  async addRating(rating: number) {
    if (this.berita) {
      this.berita.rating.push(rating);
      const alert = await this.alertController.create({
        header: 'Terima Kasih!',
        message: `Anda memberikan rating ${rating} bintang.`,
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  addComment() {
    const currentUser = this.authService.getCurrentUser();
    if (this.berita && this.newCommentText.trim() !== '' && currentUser) {
      this.berita.comments.push({ 
        user: currentUser.username, 
        text: this.newCommentText,
        replies: []
      });
      this.newCommentText = '';
    } else if (!currentUser) {
      alert('Anda harus login terlebih dahulu untuk berkomentar.');
    }
  }
}

