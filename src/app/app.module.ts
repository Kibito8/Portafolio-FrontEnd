import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { SkillsListComponent } from './components/skills-list/skills-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { DataServices } from './services/data.services';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes=[
  {path: '', component:HomeComponent,},
  {path: 'login', component: LoginComponent, },
  {path: 'register', component: RegisterComponent},
  { path: '**', component: Pagina404Component }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    Pagina404Component,
    AcercaDeComponent,
    EducacionComponent,
    ExperienciasComponent,
    ProyectosComponent,
    RegisterComponent,
    HomeComponent,
    SkillsListComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
