import { ScrollingModule } from '@angular/cdk/scrolling';
import { DataService } from './../../services/data.service';
import { ItemComponent } from './../../item/item.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-items',
  templateUrl: './display-items.component.html',
  styleUrls: ['./display-items.component.css']
})
export class DisplayItemsComponent implements OnInit {

  items: ItemComponent[];
  item: ItemComponent;

  constructor(private dataService: DataService, private router: Router) { }

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

  editItem(id: number): void {
    this.dataService.getItem(id).subscribe((data) => {
      this.item = data;
    });
    this.router.navigate(['/items', this.item.id , 'edit']);
  }

  deleteItem(id: number): void {
    this.dataService.deleteItem(id).subscribe((data: void) => {
      let index: number = this.items.findIndex(item => item.id === id);
      this.items.splice(index, 1);
    });
  }
}
