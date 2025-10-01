import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService, Berita } from '../services/data.berita';

@Component({
  selector: 'app-cari-berita',
  templateUrl: './cari-berita.page.html',
  styleUrls: ['./cari-berita.page.scss'],
  standalone: false,
})
export class CariBeritaPage implements OnInit {
  searchQuery: string = '';
  allNews: Berita[] = [];
  filteredNews: Berita[] = [];
  hasSearched: boolean = false; // Untuk melacak apakah pencarian sudah dilakukan

  constructor(
    private newsService: NewsService,
    private router: Router
  ) { }

  ngOnInit() {
    // Ambil semua data berita sekali saja saat halaman dimuat
    this.allNews = this.newsService.getBeritaList();
    this.filteredNews = []; 
  }

  /**
   * Fungsi ini dipanggil setiap kali pengguna mengetik di search bar.
   */
  handleSearch(event: any) {
    const query = event.target.value.toLowerCase();
    this.searchQuery = query;
    this.hasSearched = true; // Tandai bahwa pencarian telah dimulai

    if (query && query.trim() !== '') {
      // Filter daftar berita berdasarkan judul yang cocok dengan query
      this.filteredNews = this.allNews.filter((berita) => {
        return berita.title.toLowerCase().includes(query);
      });
    } else {
      // Jika search bar kosong, kosongkan juga hasilnya
      this.filteredNews = [];
    }
  }

  /**
   * Navigasi ke halaman detail berita.
   */
  goToDetail(id: string) {
    this.router.navigate(['/baca-berita'], { state: { beritaId: id } });
  }
}
