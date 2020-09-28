import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMenuOpen = true;
  contentMargin = 180;
  txtInfo = 13

  onToolbarMenuToggle(){
    //console.log('toolbar toggle', this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen){
      this.contentMargin = 55;
      this.txtInfo = 0;
    }
    else {
      this.contentMargin = 180;
      this.txtInfo = 13;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
