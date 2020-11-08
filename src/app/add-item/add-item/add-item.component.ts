import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemComponent } from 'src/app/item/item.component';
import { DataService } from './../../services/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private dataService: DataService,
              private router: Router,
              private toastr: ToastrService) { }

  addItemForm: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  saveItem(): void {
    let newItem: ItemComponent = this.addItemForm.getRawValue();
    newItem.id = 0;
    console.log(newItem);

    this.dataService.addItem(newItem).subscribe(
      (data: ItemComponent) => console.log(data),
      (err: any) => console.log(err)
    );
    this.toastr.success("Item saved!");
    this.router.navigate(["/items"]);
  }

  initializeForm(): void {
    this.addItemForm = this.formBuilder.group({
      albumId: '',
      id: '',
      title: '',
      url: '',
      thumbnailUrl: ''
    });
  }
}
