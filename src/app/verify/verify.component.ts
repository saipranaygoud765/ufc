import { Component, OnInit, SimpleChanges } from '@angular/core';
import { AppService } from '../app.service';
import { MatDialog } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  constructor(private appService: AppService, private dialog: MatDialog, private router: Router) {}

  
  
  onOtpChange(e) {
console.log(e);
  }   
  
      ngOnInit() {
      
      }
  
      verifyClick() {
        this.router.navigate(['/login']);
      }      
  

}
