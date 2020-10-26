import { ItemComponent } from './../item/item.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<ItemComponent[]> {
    const url = "http://jsonplaceholder.typicode.com/photos";
    return this.http.get<ItemComponent[]>(url);
  }
}
