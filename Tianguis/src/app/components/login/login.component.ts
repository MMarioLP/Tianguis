import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { usuario } from 'src/app/models/usuario';

import { SocialAuthService } from '@abacritt/angularx-social-login';
import { FacebookLoginProvider, SocialUser } from '@abacritt/angularx-social-login';
import { UserService } from '../../Service/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from '../../Service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  socialUser: SocialUser;
  userLogged: SocialUser;
  isLonged: boolean;

  usuario:usuario=new usuario();

  username: string='';
  pass: string='';
  loading:boolean=false;

  constructor(
              private router: Router, 
              private authService:SocialAuthService,
              private userService:UserService,
              private loginService:LoginService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe(
      data =>{
        this.userLogged = data;
        this.isLonged = (this.userLogged !=null)
      }
    );
  }
  

  Registro(){
    this.router.navigate(["/registro"])
  }

 signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      data =>{
        this.userLogged = data;
        this.isLonged = true;
        this.router.navigate(["/menu"]);
      }
    );
  }

  logOut(): void{
    this.authService.signOut();
  }


  login(){
    //validamos qu el usuario ingrese datos
    
      //validamos qu el usuario ingrese datos
      if(this.username==''||this.pass==''){
        alert('Todos los campos son obligatorios')    
        return;
    }

  const  user:usuario={
    username: this.username,
    pass: this.pass,
   

  }
  
  this.userService.login(user).subscribe({
    next:(res:any)=>{
      this.router.navigate(['/menu'])
      localStorage.setItem('token',res.token)

      this.loginService.isLogin = true;
    },
    error:(e:HttpErrorResponse)=>{
      if(e.error.msg){
        alert(e.error.msg);
        this.loginService.isLogin = false;
        }else{
          alert('Upps ocurrio un error, comuniquese  con el administrador');
        }
     }
  })
}
}
