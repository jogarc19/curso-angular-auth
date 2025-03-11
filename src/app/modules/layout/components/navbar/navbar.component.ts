import { Component } from '@angular/core';
import {
  faBell,
  faInfoCircle,
  faClose,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@services/auth.service';
import { TokenService } from '@services/token.service';
import { Router} from  '@angular/router';
//import { User } from '@models/users.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faClose = faClose;
  faAngleDown = faAngleDown;

  isOpenOverlayAvatar = false;
  isOpenOverlayBoards = false;

  //user: User | null=null;

  //es un observable y puede venir como null, todo observable necesita de un estado inicial
  //para eso se tiene que haer una suscripcion desde el template html : *ngIf="user$ | async as user"
  user$ = this.authService.user$;

  constructor(
    private authService:AuthService,
    private router:Router,
    private tokenService:TokenService
  ) {}

  /*ngOnInit(){
    this.authService.getProfile()
    .subscribe({
      next:(user)=>{
        this.user=user
      }
    });
  }*/
  
  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
    
  }

  isValidToken(){
    console.log(this.tokenService.isValidToken());
  }
}
