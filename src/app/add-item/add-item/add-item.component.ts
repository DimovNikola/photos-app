import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemComponent } from 'src/app/item/item.component';
import { DataService } from './../../services/data.service';
import { ToastrService } from 'ngx-toastr';
import { ValidateUrl } from './../../validators/url.validator';

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
      albumId: ['', Validators.required],
      id: ['', Validators.required],
      title: ['', Validators.required],
      url: ['', [Validators.required, ValidateUrl]],
      thumbnailUrl: ['', [Validators.required, ValidateUrl]]
    });
  }


  get albumId() {return this.addItemForm.get('albumId');}
  get id() {return this.addItemForm.get('id');}
  get title() {return this.addItemForm.get('title');}
  get url() {return this.addItemForm.get('url');}
  get thumbnailUrl() {return this.addItemForm.get('thumbnailUrl');}
}
