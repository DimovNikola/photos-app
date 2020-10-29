import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ItemComponent } from 'src/app/item/item.component';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private dataService: DataService) { }

  addItemForm: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  saveItem(formValues: any): void {
    let newItem: ItemComponent = <ItemComponent>formValues;
    newItem.id = 0;
    console.log(newItem);

    this.dataService.addItem(newItem).subscribe(
      (data: ItemComponent) => console.log(data),
      (err: any) => console.log(err)
    );
  }

  initializeForm(): void {
    this.addItemForm = this.formBuilder.group({
      AlbumId: '',
      id: '',
      title: '',
      url: '',
      thumbnailUrl: ''
    });
  }
}
