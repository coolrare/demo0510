import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'My Site Name';
  logo_img = '/assets/images/logo.png';

  constructor() { }

  ngOnInit() {
  }

  changeTitle($event: MouseEvent) {
    this.sitename = 'The Will Will Web';
    console.log($event);
  }
}
