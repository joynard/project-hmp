// Ganti seluruh isi file daftar-berita.page.ts dengan kode ini

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-daftar-berita',
  templateUrl: './daftar-berita.page.html',
  styleUrls: ['./daftar-berita.page.scss'],
  standalone: false,
})
export class DaftarBeritaPage implements OnInit {
  kategoriId: string = '';
  beritaList: any[] = [];

  // Data berita dengan URL gambar yang sudah diperbaiki
  semuaBerita = [
    // Kategori: economy
    { id: 'a1', title: 'Inflasi Turun di Q3', kategori: ['economy'], image: 'https://picsum.photos/seed/a1/400/200', rating: [4, 5, 3, 4] },
    { id: 'a4', title: 'Bank Sentral Naikkan Suku Bunga', kategori: ['economy'], image: 'https://picsum.photos/seed/a4/400/200', rating: [4, 4, 4, 3] },
    { id: 'a5', title: 'Pasar Saham Kembali Menguat', kategori: ['economy'], image: 'https://picsum.photos/seed/a5/400/200', rating: [5, 4, 5] },

    // Kategori: sports
    { id: 'a2', title: 'Timnas Menang Dramatis', kategori: ['sports'], image: 'https://picsum.photos/seed/a2/400/200', rating: [5, 5, 4] },
    { id: 'a6', title: 'Jadwal Pertandingan Liga Champions Dirilis', kategori: ['sports'], image: 'https://picsum.photos/seed/a6/400/200', rating: [5, 5, 5, 4] },
    { id: 'a7', title: 'Pembalap Muda Juarai Seri Balapan Terakhir', kategori: ['sports'], image: 'https://picsum.photos/seed/a7/400/200', rating: [4, 5, 4] },
    
    // Kategori: tech
    { id: 'a3', title: 'Startup Lokal Go Global', kategori: ['tech', 'economy'], image: 'https://picsum.photos/seed/a3/400/200', rating: [4, 4, 5, 5] },
    { id: 'a8', title: 'Peluncuran Smartphone Terbaru Pecahkan Rekor', kategori: ['tech'], image: 'https://picsum.photos/seed/a8/400/200', rating: [5, 5, 4, 5] },
    { id: 'a9', title: 'Kecerdasan Buatan (AI) Mengubah Dunia Kerja', kategori: ['tech'], image: 'https://picsum.photos/seed/a9/400/200', rating: [4, 4, 4] },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.kategoriId = this.route.snapshot.paramMap.get('categoryId') || '';
    this.filterBerita();
  }

  filterBerita() {
    if (this.kategoriId) {
      this.beritaList = this.semuaBerita.filter(b => b.kategori.includes(this.kategoriId));
    } else {
      this.beritaList = this.semuaBerita;
    }
  }

  getAverageRating(ratingArr: number[]): string {
    if (!ratingArr || ratingArr.length === 0) return '0';
    const avg = ratingArr.reduce((a, b) => a + b, 0) / ratingArr.length;
    return avg.toFixed(1);
  }

  goToDetail(id: string) {
    this.router.navigate(['/baca-berita'], { state: { beritaId: id } });
  }
}