import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.page.html',
  styleUrls: ['./kategori.page.scss'],
  standalone:false,
})
export class KategoriPage implements OnInit {
  categories = [
    { id: 'economy', name: 'Ekonomi' },
    { id: 'sports', name: 'Olah Raga' },
    { id: 'tech', name: 'Teknologi' }
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  goToCategory(categoryId: string) {
    this.router.navigate(['/daftar-berita', categoryId]);
  }
}
