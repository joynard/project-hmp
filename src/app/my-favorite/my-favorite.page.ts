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
  favoriteNews: Berita[] = []; // Array untuk menampung list berita favorit

  constructor(
    private newsService: NewsService,
    private router: Router
  ) {}

  // ionViewWillEnter diterapkan agar daftar favorit selalu refresh tiap kali halaman dibuka
  ionViewWillEnter() {
    this.loadFavorites();
  }

  // Ambil semua berita kemudian filter yang memiliki flag isFavorite = true
  // Ini akan mengisi favoriteNews dengan berita favorit saja
  loadFavorites() {
    this.favoriteNews = this.newsService.getBeritaList().filter(b => b.isFavorite);
  }

  // Navigasi menuju halaman detail berita ketika item favorit diklik
  // beritaId dikirim melalui state agar bisa diterima di halaman detail
  goToDetail(id: string) {
    this.router.navigate(['/baca-berita'], { state: { beritaId: id } });
  }
}