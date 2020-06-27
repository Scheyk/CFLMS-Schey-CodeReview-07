import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TravelsComponent } from './travels/travels.component';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { WarenkorbComponent } from './warenkorb/warenkorb.component';



const routes: Routes = [
	{
		path: '',component: HomeComponent
	},
	{
		path: 'travels',component: TravelsComponent
	},
	{
		path: 'offers/:ID',component: CartComponent
	},	
	{
		path: 'blog',component: BlogComponent
	},
	{
		path: 'warenkorb',component: WarenkorbComponent
	}	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
