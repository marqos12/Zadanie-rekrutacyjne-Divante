import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './home/item-list/item-list.component';
import { ItemDetailsComponent } from './home/item-details/item-details.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent,
    children:[{
        path:"item/:id",
        component:ItemDetailsComponent
      },
      {
      path:"",
      component:ItemListComponent
    }]
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"**",
    redirectTo:"/home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
