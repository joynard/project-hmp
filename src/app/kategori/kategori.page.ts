// Ganti seluruh isi file kategori.page.ts dengan kode ini

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.page.html',
  styleUrls: ['./kategori.page.scss'],
  standalone: false, // <--- INI BAGIAN YANG DIPERBAIKI
})
export class KategoriPage implements OnInit {

  categories = [
    { id: 'economy', name: 'Ekonomi' },
    { id: 'sports', name: 'Olah Raga' },
    { id: 'tech', name: 'Teknologi' },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Fungsi inilah yang akan dipanggil saat card kategori diklik
  goToCategory(categoryId: string) {
    // Navigasi ke URL yang benar, dengan '/tabs/' di depannya
    this.router.navigate(['/tabs/daftar-berita', categoryId]);
  }

}