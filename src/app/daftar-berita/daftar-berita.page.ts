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
  kategoriId: string = '';
  beritaList: Berita[] = []; // Gunakan tipe data Berita

  // HAPUS array 'semuaBerita' dari sini

  // 2. Inject NewsService di constructor
  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.kategoriId = this.route.snapshot.paramMap.get('categoryId') || '';
    this.filterBerita();
  }

  filterBerita() {
    // 3. Ambil data dari service, bukan dari variabel lokal
    const semuaBerita = this.newsService.getBeritaList();

    if (this.kategoriId) {
      this.beritaList = semuaBerita.filter(b => b.kategori.includes(this.kategoriId));
    } else {
      this.beritaList = semuaBerita;
    }
  }

  getAverageRating(ratingArr: number[]): string {
    if (!ratingArr || ratingArr.length === 0) return '0';
    const avg = ratingArr.reduce((a, b) => a + b, 0) / ratingArr.length;
    return avg.toFixed(1);
  }

  // Fungsi ini sudah benar, tidak perlu diubah.
  goToDetail(id: string) {
    this.router.navigate(['/baca-berita'], { state: { beritaId: id } });
  }
}