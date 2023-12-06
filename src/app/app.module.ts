import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AmbientesComponent } from './ambientes/ambientes/ambientes/ambientes.component';
import { RouterModule } from '@angular/router';
import { FormularioComponent } from './auth/formulario/formulario.component';
import { Formulario2Component } from './auth/formulario2/formulario2.component';
import { Ambiente1Module} from './ambientes/ambiente1/ambiente1.module';
import { Ambiente2Module } from './ambientes/ambiente2/ambiente2.module';
import { Ambiente3Module } from './ambientes/ambiente3/ambiente3.module';
import { DeleteComponent } from './auth/delete/delete.component';
import { UpdateComponent } from './auth/update/update.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AmbientesComponent,
    NavbarComponent,
    FooterComponent,
    FormularioComponent,
    Formulario2Component,
    DeleteComponent,
    UpdateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ambiente1Module,
    Ambiente2Module,
    Ambiente3Module
  ],
  exports: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AmbientesComponent,
    NavbarComponent,
    FooterComponent,
    RouterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
