import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  changeKeyword(value: string) {
    this.title = value;
  }

  clearKeyword(input: HTMLInputElement) {
      this.title = '';
      input.value = '';
  }
}
