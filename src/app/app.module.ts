import { CacheInterceptor } from './cache.interceptor';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DataService } from './services/data.service';
import { ItemComponent } from './item/item.component';
import { NavBarComponent } from './nav/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DisplayItemsComponent } from './display-items/display-items/display-items.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { MatCardModule } from '@angular/material/card';
import { AddItemComponent } from './add-item/add-item/add-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ItemComponent,
    DisplayItemsComponent,
    HomeComponent,
    EditComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    ScrollingModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  providers: [
    DataService,
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
