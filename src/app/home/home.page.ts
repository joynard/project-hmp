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
  currentUser: User | null = null;
  featuredNews: Berita[] = [];
  latestNews: Berita[] = [];

  constructor(
    private router: Router,
    private newsService: NewsService,
    private authService: AuthService
  ) {}

  // Refresh tiap visit home tab
  ionViewWillEnter() {
    this.currentUser = this.authService.getCurrentUser();
    const allNews = this.newsService.getBeritaList();
    
    this.featuredNews = allNews.slice(0, 4); // Ambil 3 berita pertama sebagai berita utama
    
    this.latestNews = allNews.slice(4); // Lain sisanya sebagai berita terbaru
  }

  goToCariBerita() {
    this.router.navigate(['tabs/cari-berita']);
  }

  goToDetail(id: string) {
    this.router.navigate(['/baca-berita'], { state: { beritaId: id } });
  }

  // Handle refresh saat pengguna menarik layar ke bawah
  handleRefresh(event: any) {
    setTimeout(() => {
      this.ionViewWillEnter(); // Refresh data
      event.target.complete();
    }, 1000);
  }
}
