import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Event } from '@angular/router';


@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavBarComponent implements OnInit {

  clicked: boolean = false;

  constructor(private location: Location, private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.clicked = event.url === '/items';
      }
    });
  }

  ngOnInit() {
  }

  toggleClicked() {
    this.clicked = !this.clicked;
    if (this.clicked) {
      document.getElementById("nav").style['height'] = "12em";
    }
    else {
      document.getElementById("nav").style['height'] = "7em";
    }
  }

  backToTop(): void {
    location.reload();
  }
}
