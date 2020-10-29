import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemComponent } from '../item/item.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  selectedItem: ItemComponent;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    let itemId: number = +this.route.snapshot.params['id'];
    this.dataService.getItem(itemId).subscribe((data) => {
      this.selectedItem = data;
    });
  }

  saveChanges(): void {
    this.dataService.updateItem(this.selectedItem).subscribe(
      (data: void) => console.log(`${this.selectedItem.title} updated successfully`),
      (err: any) => console.log(err)
    )
  }

}
