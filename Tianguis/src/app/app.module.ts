import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReguistroComponent } from './components/reguistro/reguistro.component';
import { MenuComponent } from './menu/menu.component';
import { ServiceService } from './Service/service.service';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { FacebookLoginProvider } from '@abacritt/angularx-social-login';

import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BtnMylocationComponent } from './components/btn-mylocation/btn-mylocation.component';
import { LogoComponent } from './components/logo/logo.component';
import { MapScreenComponent } from './components/screen/map-screen/map-screen.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { CreateprodComponent } from './components/createprod/createprod.component';

import { ProductLisComponent } from './components/product-lis/product-lis.component';
import { EditComponent } from './components/edit/edit.component';


//external
import { NgxPayPalModule } from 'ngx-paypal';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ProductoList2Component } from './components/producto-list2/producto-list2.component';
import { VideosComponent } from './components/videos/videos.component';
import { SpinnerComponent } from './spinner/spinner.component';


import { AddTokenInterceptor } from './utils/add-token.interceptor';



// Providers
import { JwtHelperService, JWT_OPTIONS }  from '@auth0/angular-jwt'
import { TokenInterceptorsService } from './Service/token-interceptors.service';
import { CarritoComponent } from './components/carrito/carrito.component';
import { AdminComponent } from './components/admin/admin.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReguistroComponent,
    MenuComponent,
    MapViewComponent,
    LoadingComponent,
    BtnMylocationComponent,
    LogoComponent,
    MapScreenComponent,
    SearchBarComponent,
    SearchResultComponent,
    CreateprodComponent,
    ProductLisComponent,
    EditComponent,
    CartComponent,
    CartItemComponent,
    ProductoList2Component,
    VideosComponent,
    SpinnerComponent,
    CarritoComponent,
    AdminComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
     NgxPayPalModule,
    NgxSpinnerModule,
    SocialLoginModule,

  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('833143381050533')
          }
        ]
      } as SocialAuthServiceConfig,
    },
    ServiceService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    {provide: HTTP_INTERCEPTORS, useClass:AddTokenInterceptor, multi:true
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
