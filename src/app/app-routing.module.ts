import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Importamos nuestros componentes
import { LoginComponent } from './components/login/login.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

// Definimos nuestras rutas
const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: '', redirectTo: '',pathMatch:'full'},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'mi-perfil', 
  component: ProfileComponent,
  canActivate: [AuthService],
  },  
  {path: '**', component: Pagina404Component},
];

@NgModule({
  // Cargamos nuestras rutas
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
