import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  username: string;
  password?: string;
  avatar?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User | null = null;

  private users: User[] = [
    { username: 'Kenny', password: '160423002', avatar: "https://my.ubaya.ac.id/img/mhs/160423002_l.jpg" },
    { username: 'Lapod', password: '160423232', avatar: "https://my.ubaya.ac.id/img/mhs/160423232_l.jpg" },
    { username: 'Darren', password: '160423233', avatar: "https://my.ubaya.ac.id/img/mhs/160423233_l.jpg" },
    { username: 'Hansen', password: '160423131', avatar: "https://my.ubaya.ac.id/img/mhs/160423131_l.jpg" }
  ];

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      // Simpan seluruh data user yang login
      this.currentUser = { ...user };
      return true;
    }
    return false;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  /**
   * Mengganti password user yang sedang login.
   * @returns true jika berhasil, false jika gagal.
   */
  changePassword(oldPassword: string, newPassword: string): boolean {
    if (!this.currentUser) {
      return false; // Tidak ada user yang login
    }

    // Cari user berdasarkan username yang login
    const usersData = this.users.find(u => u.username === this.currentUser?.username);

    if (usersData && usersData.password === oldPassword) {
      // Update password di data user
      usersData.password = newPassword;
      // Update juga password di sesi yang sedang berjalan
      if(this.currentUser) {
        this.currentUser.password = newPassword;
      }
      return true;
    }

    return false; // Password lama salah
  }

  logout() {
    this.currentUser = null;
    this.router.navigate(['/login']);
  }
}
