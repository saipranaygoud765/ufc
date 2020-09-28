import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ufcvideo',
  templateUrl: './ufcvideo.component.html',
  styleUrls: ['./ufcvideo.component.scss']
})
export class UfcComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
      setTimeout(()=>{
        this.router.navigateByUrl('/home')
      },10000)
  }

}
