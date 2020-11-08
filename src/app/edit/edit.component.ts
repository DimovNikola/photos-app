import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemComponent } from '../item/item.component';
import { DataService } from '../services/data.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editForm: FormGroup;
  selectedItem: ItemComponent;

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private router: Router,
              private fb: FormBuilder,
              private toastr: ToastrService) {}

  ngOnInit(): void {
    this.editForm = this.fb.group({
      albumId: '',
      id: '',
      title: '',
      url: '',
      thumbnailUrl: ''
    });


    let itemId: number = +this.route.snapshot.params['id'];
    let response = this.dataService.getItem(itemId);
    response.subscribe((data) => {
      this.selectedItem = data
    });

    this.populateData();
  }

  populateData(): void {
    this.editForm.setValue({
      albumId: this.selectedItem.albumId,
      id: this.selectedItem.id,
      title: this.selectedItem.title,
      url: this.selectedItem.url,
      thumbnailUrl: this.selectedItem.thumbnailUrl
    });
  }

  saveChanges(): void {
    this.selectedItem = <ItemComponent>this.editForm.getRawValue();
    console.log(this.selectedItem);
    this.dataService.updateItem(this.selectedItem).subscribe(
      (data: void) => console.log(`${this.selectedItem.title} updated successfully`),
      (err: any) => console.log(err)
    )
    this.toastr.success("Changes Saved!");
    this.router.navigate(['/items']);
  }

}
