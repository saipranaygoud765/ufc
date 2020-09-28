import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-forgotpass',
    templateUrl: 'forgotpass.component.html',
    styleUrls: ['forgotpass.component.scss']
})

export class ForgotpassComponent implements OnInit{

    verifyComp = false;
    forgotpasshide= true;

    constructor() { }

    ngOnInit(): void {
    }
    verifyclicked(){
        this.verifyComp = true;
        this.forgotpasshide= false;
    }
  }
