import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.page.html',
  styleUrls: ['./themes.page.scss'],
  standalone: false,
})
export class ThemesPage implements OnInit {

  constructor() { }

  ngOnInit() {
    // Saat halaman dibuka, cek tema tersimpan kalau belom ada pakai default
    const savedTheme = localStorage.getItem('selected-theme') || 'default';

    // Jika tema yang disimpan bukan default
    // Tambahkan class ke body sesuai tema
    if (savedTheme !== 'default') {
      document.body.classList.add(`theme-${savedTheme}`);
    }
  }

  changeTheme(color: string) {
    // Hapus semua class tema yang mungkin sedang active di body
    document.body.classList.remove('theme-blue', 'theme-green', 'theme-purple');

    // Jika user memilih bukan default
    // tambahkan class tema baru ke body
    if (color !== 'default') {
      document.body.classList.add(`theme-${color}`);
    }

    // Simpan nama theme ke localStorage
    // supaya kalau app dibuka lagi tetap tersimpan
    localStorage.setItem('selected-theme', color);
  }

}
