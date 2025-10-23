import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// 1. Import NewsService dan interface Berita
import { NewsService, Berita } from '../services/data.berita';

@Component({
  selector: 'app-daftar-berita',
  templateUrl: './daftar-berita.page.html',
  styleUrls: ['./daftar-berita.page.scss'],
  standalone: false,
})
export class DaftarBeritaPage implements OnInit {
  kategoriId: string = '';  // Menampung kategori yang dipilih dari URL
  beritaList: Berita[] = []; // Menampung daftar berita setelah difilter

  // Inject NewsService di constructor
  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    // Ambil parameter dari URL: /daftar-berita/:categoryId
    this.kategoriId = this.route.snapshot.paramMap.get('categoryId') || '';
    
    // Setelah kategori ditemukan → lakukan filter berita
    this.filterBerita();
  }

  // Filter daftar berita berdasarkan kategori
  filterBerita() {

    // Ambil data dari service dan filter berdasarkan kategori
    const semuaBerita = this.newsService.getBeritaList();

    // Jika kategori ada (misalnya "economy", "sport", dll)
    if (this.kategoriId) {

      // Filter berita yang memiliki kategori sesuai kategoriId
      this.beritaList = semuaBerita.filter(b => b.kategori.includes(this.kategoriId));
    } else {
      // Kalau tidak ada kategori → tampilkan semua berita
      this.beritaList = semuaBerita;
    }
  }

  // Menghitung rata-rata rating suatu berita
  getAverageRating(ratingArr: { user: string; value: number }[]): string {
    
    // Kalau belum ada rating → return 0
    if (!ratingArr || ratingArr.length === 0) return '0';

    // Jumlahkan semua rating seperti: r1 + r2 + r3 ...
    const total = ratingArr.reduce((sum, r) => sum + r.value, 0);

    // Hitung rata-ratanya
    const avg = total / ratingArr.length;

    // Bulatkan ke 1 angka belakang koma → misal 4.3
    return avg.toFixed(1);
  }

  // Navigasi ke halaman detail berita
  goToDetail(id: string) {
    // Kirim ID berita ke halaman BacaBerita lewat state router
    this.router.navigate(['/baca-berita'], { state: { beritaId: id } });
  }
}