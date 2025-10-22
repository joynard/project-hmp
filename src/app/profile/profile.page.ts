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
  currentUser: User | null = null;

  // Properti untuk form ganti password
  oldPassword = '';
  newPassword = '';
  confirmPassword = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ionViewWillEnter() {
    this.currentUser = this.authService.getCurrentUser();
  }

  goToFavorites() {
    this.router.navigate(['/tabs/my-favorite']);
  }

  async changePassword() {
    if (!this.oldPassword || !this.newPassword || !this.confirmPassword) {
      this.presentAlert('Error', 'Semua field password harus diisi.');
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      this.presentAlert('Error', 'Password baru dan konfirmasi tidak cocok.');
      return;
    }

    const success = this.authService.changePassword(this.oldPassword, this.newPassword);

    if (success) {
      this.presentAlert('Sukses', 'Password Anda berhasil diubah.');
      // Empty field setelah berhasil
      this.oldPassword = '';
      this.newPassword = '';
      this.confirmPassword = '';
    } else {
      this.presentAlert('Gagal', 'Password lama yang Anda masukkan salah.');
    }
  }

  logout() {
    this.authService.logout();
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}

