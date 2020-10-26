import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {

  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;

  constructor() { }

  ngOnInit() {
    
  }
}
