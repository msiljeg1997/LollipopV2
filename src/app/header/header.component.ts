import {Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit{
  isMobile = window.innerWidth < 480;
  isCollapsed: boolean = true;

  constructor()
   {}
proba(){
  console.log(this.isCollapsed);
}

   ngOnInit() {
    
  }
}