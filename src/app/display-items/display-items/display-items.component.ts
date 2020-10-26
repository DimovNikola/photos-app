import { ScrollingModule } from '@angular/cdk/scrolling';
import { DataService } from './../../services/data.service';
import { ItemComponent } from './../../item/item.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-display-items',
  templateUrl: './display-items.component.html',
  styleUrls: ['./display-items.component.css']
})
export class DisplayItemsComponent implements OnInit {

  items: ItemComponent[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getData();
  }

  onScroll() {
    this.getData();
  }

  getData(): void {
    this.dataService.getData().subscribe((data) => {
      console.log(data);
      this.items = data;
    });
  }
}
