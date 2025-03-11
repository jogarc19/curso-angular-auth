import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  constructor(
    private authService:AuthService
  ) {}

  //aqui cargamos el perfil por unica vez y se almacena en un observable
  //el layout componente se ejecuta una sola vez cuando inicia la aplicacion.
  // y en esta parte ya tenemos la session del usuario
  ngOnInit(){
    this.authService.getProfile()
    .subscribe();
  }
}
