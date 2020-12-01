import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/providers/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');
  repeatPassword = new FormControl('');

  authError: any;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.eventAuthError$.subscribe(data => {
      this.authError = data;
    });
  }

  createUser() {
    this.auth.createUser({
      email: this.email.value,
      password: this.password.value,
      firstName: 'name',
      lastName: 'Sirname'
    });
  }
}
