import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../Service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private userService:UserService,
    private router:Router){}

  canActivate():boolean {
  
     if(!this.userService.isAuth()){
      console.log('Token no es válido o ya expiró');
      this.router.navigate(['/menu']);
      return false;
    }
    return true;
  }
  
}
