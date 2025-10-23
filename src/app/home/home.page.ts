import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService, Berita } from '../services/data.berita';
import { AuthService, User } from '../services/auten.pengguna';

// Import Swiper Element
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  currentUser: User | null = null; // Menyimpan info user yang sedang login
  featuredNews: Berita[] = []; // Array berita untuk tampilan slider/top news
  latestNews: Berita[] = []; // Array berita untuk list berita terbaru

  constructor(
    private router: Router,
    private newsService: NewsService,
    private authService: AuthService
  ) {}

  // Refresh tiap visit home tab
  ionViewWillEnter() {

    // Ambil data user yang login saat ini
    this.currentUser = this.authService.getCurrentUser();

    // Ambil semua berita dari service
    const allNews = this.newsService.getBeritaList();
    
    this.featuredNews = allNews.slice(0, 4); // Ambil 4 berita pertama sebagai berita utama
    
    this.latestNews = allNews.slice(4); // Lain sisanya sebagai berita terbaru
  }

  // Navigasi menuju halaman pencarian berita
  goToCariBerita() {
    this.router.navigate(['tabs/cari-berita']);
  }

  // Navigasi menuju halaman detail berita (dengan passing ID berita)
  goToDetail(id: string) {
    this.router.navigate(['/baca-berita'], { state: { beritaId: id } });
  }

  // Handle refresh saat pengguna menarik layar ke bawah
  handleRefresh(event: any) {
    setTimeout(() => {
      this.ionViewWillEnter(); // Refresh data
      event.target.complete(); // Hentikan animasi loading refresh
    }, 1000); // Delay simulasi server loading 1 detik
  }
}
