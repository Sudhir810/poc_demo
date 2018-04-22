import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { UserHeaderComponent } from './user-header/user-header.component';
import { RegitrationServiceService } from './regitration-service.service';
import { LoginServiceService } from './login-service.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderService } from './header.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
     HomepageComponent,
    RegistrationComponent,
    LoginComponent,
    UserComponent,
    UserHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
    // NgModule
  ],
  providers: [
    RegitrationServiceService,
    LoginServiceService,
    HeaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
