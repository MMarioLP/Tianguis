import { Component } from '@angular/core';
import { LoginService } from './Service/login.service';
import { Router, UrlSerializer } from '@angular/router';
import { ServiceService } from './Service/service.service';
import { ReguistroComponent } from './components/reguistro/reguistro.component';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { FacebookLoginProvider } from '@abacritt/angularx-social-login';
import { SocialUser } from '@abacritt/angularx-social-login';
import { UserService } from './Service/user.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tianguis';
  socialUser: SocialUser;
  isLogin: boolean;

  constructor(private router:Router, private login:LoginService, private service:ServiceService, private socialAuthService: SocialAuthService
    , userService:UserService){
    this.service.setUsuarios();
    if (!login.isLogin) {
  
    }
  }

 
  lognOut(){

    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }


  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) =>{

      console.log('Datos de Usuario')
      console.log(user)
      this.socialUser = user;
      this.isLogin = (user !=null)
    });
  }

  loginWithFacebook(): void{
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void{
    this.socialAuthService.signOut();
  }
}
