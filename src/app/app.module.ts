import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule, MatFormFieldModule, MatInputModule,  MatDatepickerModule, MatNativeDateModule, MatMenuItem, MatMenuContent, MatMenuTrigger, MatMenuModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonModule, MatDividerModule, MatBadgeModule, MatCardModule, MatButtonToggleModule } from '@angular/material';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import {Ng2TelInputModule} from 'ng2-tel-input';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModuleClass } from './app-routes.module';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { VerifyComponent } from './verify/verify.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { HeaderComponent } from './shared/header/header.component';


import { ChangepasswordComponent } from './changepassword/changepassword.component';



import { HttpClientModule } from '@angular/common/http';



import { AuthService } from './auth/auth.service';



import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { AboutufcComponent } from './about ufc/aboutufc.component';
import { RegComponent } from './reg/reg.component';
import { FitnessComponent } from './fitness/fitness.component';
import { BoxkingComponent } from './boxking/boxking.component';
import { FocusComponent } from './focus/focus.component';
import { PaymentsComponent } from './payments/payments.component';
import { PhotosComponent } from './photos/photos.component';
import { UfcComponent } from './ufcvideo/ufcvideo.component';







@NgModule({
  declarations: [
    AppComponent, SignupComponent, LoginComponent, ForgotpassComponent, VerifyComponent,
    HeaderComponent,ChangepasswordComponent,LandingComponent, HomeComponent,AboutufcComponent,
    RegComponent,FitnessComponent,BoxkingComponent,FocusComponent,PaymentsComponent,PhotosComponent,
    UfcComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, MatDialogModule, Ng2TelInputModule,
     MatFormFieldModule, MatInputModule, FormsModule, RouterModuleClass, ReactiveFormsModule,
     NgOtpInputModule, MatDatepickerModule, HttpClientModule, MatNativeDateModule, MatMomentDateModule,
     MatMenuModule,MatSidenavModule,MatToolbarModule,MatIconModule,MatListModule,
     MatInputModule,MatDividerModule,MatMenuModule,MatCardModule,MatBadgeModule
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [LandingComponent]
})
export class AppModule { }
