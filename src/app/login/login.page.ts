import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// 1. Import AuthService
import { AuthService } from '../services/auten.pengguna';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:false,
})
export class LoginPage implements OnInit {
  
  username: string = '';
  password: string = '';

  // Hapus array 'users' dan 'loginSuccess' dari sini

  // 2. Inject AuthService di constructor
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
  }

  login() {
    // 3. Gunakan AuthService untuk memvalidasi login
    const loginSuccess = this.authService.login(this.username, this.password);

    if (loginSuccess) {
      // Jika berhasil, arahkan ke home
      this.router.navigate(['/tabs/home']);
    } else {
      // Jika gagal, tampilkan pesan error
      alert('Username atau Password salah!');
    }
  }
}
