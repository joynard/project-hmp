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
  searchQuery: string = ''; // String untuk menyimpan teks pencarian user
  allNews: Berita[] = []; // Array semua berita yang ada (data asli)
  filteredNews: Berita[] = []; // Array berita hasil pencarian
  hasSearched: boolean = false; // Untuk melacak apakah pencarian sudah dilakukan

  constructor(
    private newsService: NewsService, // akses data berita dari service
    private router: Router // untuk navigasi ke detail
  ) { }

  ngOnInit() {
    // Ambil semua data berita satu kali saat halaman dimuat
    this.allNews = this.newsService.getBeritaList();

    // Kosongkan hasil pencarian (belum search)
    this.filteredNews = []; 
  }

  // Method dipanggil tiap kali pengguna mengetik di search bar
  handleSearch(event: any) {

    // Ambil teks input & ubah ke lowercase supaya pencarian case-insensitive
    const query = event.target.value.toLowerCase();
    this.searchQuery = query;

    // Set nilai: user sudah melakukan search
    this.hasSearched = true; // Ubah hasSearched menjadi true saat search dilakukan

    // Jika input tidak kosong
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
    // Kirim parameter lewat state Angular Router
    this.router.navigate(['/baca-berita'], { state: { beritaId: id } });
  }
}
