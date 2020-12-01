import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { AuthService } from 'src/providers/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  showSearchBox: boolean;
  navbarOpen = false;

  constructor(public authService: AuthService) {}

  ngOnInit() {}
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 200) {
      const element = document.getElementById('navbar');
      element.classList.add('sticky');
    } else {
      const element = document.getElementById('navbar');
      element.classList.remove('sticky');
    }
  }
}
