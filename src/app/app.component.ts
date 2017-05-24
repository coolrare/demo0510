import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(public datasvc: DataService) {
  }

  ngOnInit() {
  }

  changeKeyword(value: string) {
    this.title = value;
  }

  clearKeyword(input: HTMLInputElement) {
      this.title = '';
      input.value = '';
  }
}
