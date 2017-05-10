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

  clearKeyword($event: KeyboardEvent) {
    if($event.keyCode == 27) {
      this.title = '';
      ($event.target as HTMLInputElement).value = '';
    }
  }
}
