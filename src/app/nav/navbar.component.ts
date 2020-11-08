import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavBarComponent implements OnInit {

  clicked: boolean = false;

  constructor() { }

  ngOnInit() { }

  @HostListener('window:scroll') onScroll(e: Event): void {
    this.clicked = true;
    console.log(this.clicked);
  }

  scrollToTop() {
    this.clicked = true;
  }

  toggleClicked() {
    this.clicked = !this.clicked;
    if(this.clicked) {
      document.getElementById("nav").style['height'] = "12em";
    }
    else {
      document.getElementById("nav").style['height'] = "7em";
    }
  }
}
