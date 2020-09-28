import { Component, ViewEncapsulation, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { AppService } from '../app.service';
import { MatDialog } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
    forgotpassComp = false;
    loginhide= true;
    constructor(private router: Router) {}
    login(){
        this.router.navigateByUrl('/ufcvideo')
    }




    ngOnInit() {
        

    }
forgotpassclicked(){
    this.forgotpassComp = true;
    this.loginhide= false;
}
    }
    