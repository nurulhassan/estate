import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/providers/auth.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');

  authError: any;
  auth: any;

  constructor(public authService: AuthService) {}

  ngOnInit() {}

  signInUser() {
    this.authService.signInUser({
      email: this.email.value,
      password: this.password.value
    });

  }
}
