import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ReguistroComponent } from './components/reguistro/reguistro.component';

import { MenuComponent } from './menu/menu.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { MapScreenComponent } from './components/screen/map-screen/map-screen.component';
import { LoadingComponent } from './components/loading/loading.component';

import { ProductLisComponent } from './components/product-lis/product-lis.component';
import { CreateprodComponent } from './components/createprod/createprod.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ProductoList2Component } from './components/producto-list2/producto-list2.component';
import { VideosComponent } from './components/videos/videos.component';

import { AuthGuard } from './utils/auth.guard';
import { AdminComponent } from './components/admin/admin.component';
import { RolGuard } from './utils/rol.guard';


const routes: Routes = [
  {path: '',
redirectTo: '/menu',
pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path:'registro',component:ReguistroComponent},
  {path: 'menu',component:MenuComponent},
  {path:'map',component:MapScreenComponent,canActivate:[AuthGuard]},
  {path: 'view', component:MapViewComponent,canActivate:[AuthGuard]},
  {path: 'load', component:LoadingComponent,canActivate:[AuthGuard]},

  {path: 'list', component:ProductLisComponent,canActivate:[AuthGuard]},
  {path: 'cart', component:CartComponent,canActivate:[AuthGuard]},
  {path: 'add',component:CreateprodComponent,canActivate:[AuthGuard]},
  {path: 'add/:id', component: CreateprodComponent,canActivate:[AuthGuard]},
  {path: 'list2', component:ProductoList2Component,canActivate:[AuthGuard]},
  {path: 'videos',component:VideosComponent,canActivate:[AuthGuard]},
  {path: 'admin',component:AdminComponent,canActivate:[RolGuard],data:{expectedRole:'Samuel'}}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
