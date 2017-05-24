import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  data: any;

  constructor(private datasvc: DataService) {
  }

  ngOnInit() {
    this.data = this.datasvc.data;
  }

  changeKeyword(value: string) {
    this.title = value;
  }

  clearKeyword(input: HTMLInputElement) {
      this.title = '';
      input.value = '';
  }

  deleteArticle(item) {
    const idx = this.data.indexOf(item);
    this.data.splice(idx, 1);
  }

}
