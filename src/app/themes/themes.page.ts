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
    // Saat halaman dibuka, cek tema tersimpan
    const savedTheme = localStorage.getItem('selected-theme') || 'default';
    if (savedTheme !== 'default') {
      document.body.classList.add(`theme-${savedTheme}`);
    }
  }

  changeTheme(color: string) {
    document.body.classList.remove('theme-blue', 'theme-green', 'theme-purple');
    if (color !== 'default') {
      document.body.classList.add(`theme-${color}`);
    }
    localStorage.setItem('selected-theme', color);
  }

}
