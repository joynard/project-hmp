import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cari-berita',
  templateUrl: './cari-berita.page.html',
  styleUrls: ['./cari-berita.page.scss'],
  standalone:false,
})
export class CariBeritaPage implements OnInit {
  query: string = '';
  riwayat: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  simpanRiwayat() {
    if (this.query && !this.riwayat.includes(this.query)) {
      this.riwayat.unshift(this.query); // simpan query terbaru di paling atas
    }
  }

  pilihRiwayat(item: string) {
    this.query = item;
    // kalau mau langsung jalankan pencarian berita bisa tambahkan logika di sini
  }


}
