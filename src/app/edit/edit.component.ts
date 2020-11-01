import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemComponent } from '../item/item.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  selectedItem: ItemComponent;

  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    let itemId: number = +this.route.snapshot.params['id'];
    let response = this.dataService.getItem(itemId);
    response.subscribe((data) => {
      this.selectedItem = data
    });
  }

  saveChanges(): void {
    this.dataService.updateItem(this.selectedItem).subscribe(
      (data: void) => console.log(`${this.selectedItem.title} updated successfully`),
      (err: any) => console.log(err)
    )
    this.router.navigate(['/items']);
  }

}
