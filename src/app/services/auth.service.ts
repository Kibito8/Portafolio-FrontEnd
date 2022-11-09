import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  // La URL que corresponda en cada caso
  url = 'https://localhost:4200/api';
  token: any; 

  constructor (private http: HttpClient,private router: Router){}

  login (email:string, password:string){
    this.http.post(this.url + '/authenticate', {email: email,password:password})
    .subscribe((resp:any) => {
      // Redireccionamos al usuario a su perfil
      this.router.navigate(['profile']);
      // Guardamos el token en el localStorage
      localStorage.setItem('auth_toke', resp.token)
    })
  };
  // Para cerrar la sesión eliminamos el token del localStorage
  logout(){
    localStorage.removeItem('token')
  };
  // Un servicio para verificar si existe la sesión
  public get logIn():boolean{
    return(localStorage.getItem('token')!== null);
  }
}