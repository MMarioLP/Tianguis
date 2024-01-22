import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../Service/user.service';




import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RolGuard implements CanActivate {
  constructor(
    private userService:UserService,
    public router:Router
  ){}
  canActivate(route: ActivatedRouteSnapshot):boolean{
 



    const expectedRole= route.data.expectedRole;
    const token=localStorage.getItem('token');
    let decodetoken:any={};
    decodetoken=decode(token);
    console.log(decodetoken.username);
 

 

    if( !this.userService.isAuth() || decodetoken.username !== expectedRole){
      console.log('Usuario no autorizado para la vista');
      alert('No tienes los permisos')
      return false;
    }
    return true;
  }
  
}
