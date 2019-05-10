import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './home/item-list/item-list.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    children:[{
      path:"",
      component:ItemListComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
