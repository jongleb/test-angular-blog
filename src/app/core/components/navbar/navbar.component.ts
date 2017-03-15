import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'core-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  changeShow(){
    this.show = !this.show;
  }

}
