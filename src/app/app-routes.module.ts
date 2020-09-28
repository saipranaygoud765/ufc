import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { VerifyComponent } from './verify/verify.component';

import { HeaderComponent } from './shared/header/header.component';


import { ChangepasswordComponent } from './changepassword/changepassword.component';



import { LandingComponent } from './landing/landing.component';

import { HomeComponent } from './home/home.component';
import { RegComponent } from './reg/reg.component';
import { AboutufcComponent } from './about ufc/aboutufc.component';
import { FitnessComponent } from './fitness/fitness.component';
import { BoxkingComponent } from './boxking/boxking.component';
import { FocusComponent } from './focus/focus.component';
import { PaymentsComponent } from './payments/payments.component';
import { PhotosComponent } from './photos/photos.component';
import { UfcComponent } from './ufcvideo/ufcvideo.component';






export const routes: Routes = [
    { path: '', pathMatch: 'full', component: LandingComponent},
    { path : 'landing',component:LandingComponent},
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent},
    { path: 'forgotpass', component: ForgotpassComponent},
    { path: 'verify', component: VerifyComponent},
    { path: 'header', component: HeaderComponent},
    { path: 'changepassword', component: ChangepasswordComponent },
    { path: 'changepassword', component: ChangepasswordComponent },
    { path : 'home',component:HomeComponent},
    { path : 'aboutufc',component:AboutufcComponent},
    { path : 'reg',component:RegComponent},
    { path : 'fitness',component:FitnessComponent},
    { path : 'boxking',component:BoxkingComponent},
    { path : 'focus',component:FocusComponent},
    { path : 'payments',component:PaymentsComponent},
    { path : 'photos',component:PhotosComponent},
    { path : 'ufcvideo',component:UfcComponent},
    
    { path: '**', redirectTo:'/signup' },
      
];


@NgModule({
    exports : [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})
export class RouterModuleClass { }
