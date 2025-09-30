import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:false,
})
export class LoginPage implements OnInit {
  
  username: string = '';
  password: string = '';

  users = [
    { username: 'Kenny', password: '160423002' },
    { username: 'Lapod', password: '160423232' },
    { username: 'Darren', password: '160423233' },
    { username: 'Hansen', password: '160423131' },
    { username: 'Polad', password: '160423123' },
  ];

  loginSuccess: boolean = false;
  constructor(private router: Router) {}

  ngOnInit() {
  }

  login() {
    for (let i = 0; i < this.users.length; i++) {
      if (
        this.username === this.users[i].username &&
        this.password === this.users[i].password
      ) {
        this.loginSuccess = true;
        this.router.navigate(['/tabs/home']);
        return;
      }
    }
    alert('Username atau Password salah!');
  }
}
