import { AddItemComponent } from './add-item/add-item/add-item.component';
import { DisplayItemsComponent } from './display-items/display-items/display-items.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'additem', component: AddItemComponent },
  { path: 'items', component: DisplayItemsComponent},
  { path: 'items/:id', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
