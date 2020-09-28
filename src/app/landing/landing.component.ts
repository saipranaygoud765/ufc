import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }
submitComp = false;
logincomp = false;


  showSignup(){
    console.log('signup');
  }

  ngOnInit(): void {
  }
  submitclicked(){
    this.submitComp = true; 
    this.logincomp = false;
  } 

  loginclicked(){
    this.submitComp = false;
    this.logincomp= true;
  }

}
