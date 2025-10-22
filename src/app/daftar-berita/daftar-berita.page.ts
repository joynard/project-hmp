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
  beritaList: Berita[] = []; 

  // Inject NewsService di constructor
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
    // Ambil data dari service dan filter berdasarkan kategori
    const semuaBerita = this.newsService.getBeritaList();

    if (this.kategoriId) {
      this.beritaList = semuaBerita.filter(b => b.kategori.includes(this.kategoriId));
    } else {
      this.beritaList = semuaBerita;
    }
  }

  getAverageRating(ratingArr: { user: string; value: number }[]): string {
    if (!ratingArr || ratingArr.length === 0) return '0';

    const total = ratingArr.reduce((sum, r) => sum + r.value, 0);
    const avg = total / ratingArr.length;

    return avg.toFixed(1);
  }

  goToDetail(id: string) {
    this.router.navigate(['/baca-berita'], { state: { beritaId: id } });
  }
}