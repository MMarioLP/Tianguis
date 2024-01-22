import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { ServiceService } from '../Service/service.service';
import { UserService } from '../Service/user.service';
import { producto } from '../models/producto';
import { LoginService } from '../Service/login.service';
import { AuthGuard } from '../utils/auth.guard';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  

  userLogged: SocialUser;
  isLonged: boolean;
  islogin:boolean;

  constructor(private service: ServiceService, private router: Router, private authService:SocialAuthService
    ,private userService:UserService, private loginService: LoginService,
    private authGuard:AuthGuard
    ){};



  ngOnInit(): void {
    this.authService.authState.subscribe(
      data =>{
        this.userLogged = data;
       
        this.isLonged = (this.userLogged !=null ) 
      }
    );
    
this.log()



  }

  logOut(): void{
    this.authService.signOut();
    this.router.navigate(['/menu/list']);
  

    
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
   
  }

  log():boolean{

    if(!this.userService.isAuth()){
      console.log('Token no es válido o ya expiró');
     
   
      return this.isLonged=false;
      
    }
    
  
 
    return this.isLonged= true;
    
  }
  }
  
 

 

