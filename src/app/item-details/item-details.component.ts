import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemComponent } from '../item/item.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  item: ItemComponent;
  pageTitle: string = 'Item Details'

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

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

  onBack(): void {
    this.router.navigate(['/items']);
  }
}
