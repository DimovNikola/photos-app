import { ItemComponent } from './../item/item.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
      console.log(item);
      if(item) {
        return of(item);
      }
    }
  }

  private handleError(err: HttpErrorResponse): Observable<any>{
    let errorMessage: string;
    if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
    } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
    }
    console.error();
    return throwError(errorMessage)
  }
}
