import { ItemComponent } from './../item/item.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataService {

  private url = "http://jsonplaceholder.typicode.com/photos";
  private items: ItemComponent[];

  constructor(private http: HttpClient) { }

  getData(): Observable<ItemComponent[]> {
    if(this.items) {
      return of(this.items);
    }

    return this.http.get<ItemComponent[]>(this.url)
      .pipe(
        tap(data => this.items = data),
        catchError(this.handleError)
      );
  }

  getItem(id: number): Observable<ItemComponent> {
    if(this.items) {
      const item = this.items.find(item => item.id === id);
      if(item) {
        return of(item);
      }
    }
  }

  addItem(newItem: ItemComponent): Observable<ItemComponent> {
    return this.http.post<ItemComponent>(this.url, newItem, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  updateItem(updatedItem: ItemComponent): Observable<void> {
    return this.http.put<void>(this.url + `/${updatedItem.id}`, updatedItem, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  deleteItem(itemId: number): Observable<void> {
    return this.http.delete<void>(this.url + `/${itemId}`);
  }

  private handleError(err: HttpErrorResponse): Observable<any>{
    let errorMessage: string;
    if (err.error instanceof Error) {
        errorMessage = `An error occurred: ${err.error.message}`;
    } else {
        errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
    }
    console.error();
    return throwError(errorMessage)
  }
}
