import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService, User } from '../services/auten.pengguna';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false
})
export class ProfilePage {
  currentUser: User | null = null;   // Menyimpan data user yang sedang login


  // Properti untuk form ganti password
  oldPassword = '';
  newPassword = '';
  confirmPassword = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) { }

  // Dipanggil setiap kali halaman profile dibuka
  ionViewWillEnter() {
    // Mengambil data user yang sedang login saat ini
    this.currentUser = this.authService.getCurrentUser();
  }

  // Navigasi ke halaman daftar favorit
  goToFavorites() {
    this.router.navigate(['/tabs/my-favorite']);
  }

  // Fungsi untuk mengganti password user
  async changePassword() {
     // Validasi semua input tidak boleh kosong
    if (!this.oldPassword || !this.newPassword || !this.confirmPassword) {
      this.presentAlert('Error', 'Semua field password harus diisi.');
      return;
    }

    // Validasi password baru harus sama
    if (this.newPassword !== this.confirmPassword) {
      this.presentAlert('Error', 'Password baru dan konfirmasi tidak cocok.');
      return;
    }

    // Panggil fungsi changePassword di AuthService
    const success = this.authService.changePassword(this.oldPassword, this.newPassword);

    if (success) {
      // Jika password lama cocok dan berhasil diganti
      this.presentAlert('Sukses', 'Password Anda berhasil diubah.');
      // Empty field setelah berhasil
      this.oldPassword = '';
      this.newPassword = '';
      this.confirmPassword = '';
    } else {
      this.presentAlert('Gagal', 'Password lama yang Anda masukkan salah.');
    }
  }

  // Logout user dan hapus session
  logout() {
    this.authService.logout();
  }

  // Utility untuk menampilkan popup alert
  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}

