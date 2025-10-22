import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService, Berita } from '../services/data.berita';

@Component({
  selector: 'app-my-favorite',
  templateUrl: './my-favorite.page.html',
  styleUrls: ['./my-favorite.page.scss'],
  standalone:false,
})
export class MyFavoritePage {
  favoriteNews: Berita[] = [];

  constructor(
    private newsService: NewsService,
    private router: Router
  ) {}

  // ionViewWillEnter diterapkan agar daftar favorit selalu refresh tiap kali halaman dibuka
  ionViewWillEnter() {
    this.loadFavorites();
  }

  loadFavorites() {
    this.favoriteNews = this.newsService.getBeritaList().filter(b => b.isFavorite);
  }

  goToDetail(id: string) {
    this.router.navigate(['/baca-berita'], { state: { beritaId: id } });
  }
}