import { LoginService } from './../../shared/services/login.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/clases/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public usuario: Usuario;

  constructor(private LoginService: LoginService, private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {}

  public submit(): void {
    this.LoginService.login(this.usuario).subscribe({
      next: (data: number) => {
        localStorage.setItem('nombreUsuario', this.usuario.nombre);
        localStorage.setItem('miTokenPersonal', `${data}`);

        this.router.navigate(['/listado']);
      },
      error: (error: Error) => {
        console.error('Error al realizar el acceso');
      },
    });
  }
}
