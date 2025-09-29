import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daftar-berita',
  templateUrl: './daftar-berita.page.html',
  styleUrls: ['./daftar-berita.page.scss'],
  standalone:false,
})
export class DaftarBeritaPage implements OnInit {
  kategoriId: string = '';
  beritaList: any[] = [];

  semuaBerita = [
    { id: 'a1', title: 'Inflasi Turun di Q3', kategori: ['economy'], image: 'https://www.gerbangkaltim.com/wp-content/uploads/2024/07/saham-anjlok-1.png', rating: [4,5,3,4] },
    { id: 'a2', title: 'Timnas Menang Dramatis', kategori: ['sports'], image: 'https://cdn.rri.co.id/berita/Denpasar/o/1722312366732-1000178159/k0i2puvewpt3k6r.jpeg', rating: [5,5,4] },
    { id: 'a3', title: 'Startup Lokal Go Global', kategori: ['tech','economy'], image: 'https://www.itworks.id/wp-content/uploads/2022/08/startup-1.jpg', rating: [4,4,5,5] },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    this.kategoriId = nav?.extras.state?.['kategoriId'] || '';  // ambil kategoriId dari state
    this.filterBerita();
  }

  filterBerita() {
    this.beritaList = this.semuaBerita.filter(b => b.kategori.includes(this.kategoriId));
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
