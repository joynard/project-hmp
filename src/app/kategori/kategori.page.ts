import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.page.html',
  styleUrls: ['./kategori.page.scss'],
  standalone: false,
})
export class KategoriPage implements OnInit {

  // Perbarui array ini untuk mencocokkan semua kategori yang ada di news.service.ts
  categories = [
    { id: 'economy', name: 'Ekonomi' },
    { id: 'sports', name: 'Olah Raga' },
    { id: 'tech', name: 'Teknologi' },
    { id: 'health', name: 'Kesehatan' },
    { id: 'lifestyle', name: 'Gaya Hidup' },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Fungsi ini sudah benar dan tidak perlu diubah
  goToCategory(categoryId: string) {
    // Navigasi ke URL yang benar, dengan '/tabs/' di depannya
    this.router.navigate(['/tabs/daftar-berita', categoryId]);
  }

}

