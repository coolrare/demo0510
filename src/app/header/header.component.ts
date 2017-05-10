import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'My Site Name';
  logo_img = '/assets/images/logo.png';
  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  changeTitle($event: MouseEvent) {
    this.sitename = 'The Will Will Web';
    console.log($event);
    if($event.ctrlKey) {
      this.counter--;
    } else {
      this.counter++;
    }
  }

  isHighlight() {
    return this.counter % 2 == 0;
  }

  applyClass() {
    return {
      highlight: this.isHighlight(),
      class2: true
    };
  }
}
