import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.page.html',
  styleUrls: ['./kategori.page.scss'],
  standalone: false,
})
export class KategoriPage implements OnInit {

  // Add icon ionic untuk tiap kategori
  categories = [
    { id: 'economy', name: 'Ekonomi', icon: 'cash-outline' },
    { id: 'sports', name: 'Olah Raga', icon: 'football-outline' },
    { id: 'tech', name: 'Teknologi', icon: 'laptop-outline' },
    { id: 'health', name: 'Kesehatan', icon: 'heart-outline' },
    { id: 'lifestyle', name: 'Gaya Hidup', icon: 'color-palette-outline' },
  ];

  constructor(private router: Router) { }

  ngOnInit() { }

  goToCategory(categoryId: string) {
    this.router.navigate(['/tabs/daftar-berita', categoryId]);
  }

}
