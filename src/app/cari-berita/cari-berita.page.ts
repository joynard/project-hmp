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
    // Ambil semua data berita satu kali saat halaman dimuat
    this.allNews = this.newsService.getBeritaList();
    this.filteredNews = []; 
  }

  // Method dipanggil tiap kali pengguna mengetik di search bar
  handleSearch(event: any) {
    const query = event.target.value.toLowerCase();
    this.searchQuery = query;
    this.hasSearched = true; // Ubah hasSearched menjadi true saat search dilakukan

    if (query && query.trim() !== '') {
      // Filter daftar berita berdasarkan judul yang cocok dengan query
      this.filteredNews = this.allNews.filter((berita) => {
        return berita.title.toLowerCase().includes(query);
      });
    } else {
      this.filteredNews = []; // If search bar kosong kosongkan juga hasilnya
    }
  }

  //Navigasi ke halaman detail berita.
  goToDetail(id: string) {
    this.router.navigate(['/baca-berita'], { state: { beritaId: id } });
  }
}
