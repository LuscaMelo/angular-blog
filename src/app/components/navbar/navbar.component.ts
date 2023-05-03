import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent {
  nav: boolean = false

  setNav() {
    this.nav = !this.nav
    this.nav === true ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"
  }
}
