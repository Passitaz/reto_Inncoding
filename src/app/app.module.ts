import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './views/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContinueComponent } from './components/continue/continue.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './views/register/register.component';
import { OnboardingComponent } from './views/onboarding/onboarding.component';
import { CancelComponent } from './components/cancel/cancel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    ContinueComponent,
    DashboardComponent,
    RegisterComponent,
    OnboardingComponent,
    CancelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
