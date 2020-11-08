import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemComponent } from '../item/item.component';
import { DataService } from '../services/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  item: ItemComponent;
  pageTitle: string = 'Item Details'

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if(param) {
      const id = +param;
      this.getItem(id);
    }
  }

  getItem(id: number): void {
    this.dataService.getItem(id).subscribe((data) => {
      this.item = data;
    });
  }

  deleteItem(id: number): void {
    if(confirm("Are you sure you want to delete this item?")) {
      this.dataService.deleteItem(id).subscribe((data: void) => {
        // let index: number = this.items.findIndex(item => item.id === id);
        // this.items.splice(index, 1);
      });
      this.toastr.error("Item deleted!");
    }
  }

  onBack(): void {
    this.router.navigate(['/items']);
  }
}
