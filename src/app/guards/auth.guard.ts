import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {  CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

import {TokenService} from '@services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private tokenService:TokenService, 
    private router:Router
  ){}
  
  /*canActivate(): boolean{
    const token = this.tokenService.getToken();
    if(!token){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }*/
   canActivate(): boolean{
    //const isValidToken = this.tokenService.isValidToken();
    const isValidToken = this.tokenService.isValidRefreshToken();//los guardianes ya no van a durar lo que es accestoken, sino lo que dice refreshToken
    console.log('isValidToken from authGuard', isValidToken);
    if(!isValidToken){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
  
}
