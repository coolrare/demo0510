import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  changeKeyword($event: Event) {
    let input = $event.target as HTMLInputElement;
    console.log(input.value);
    this.title = input.value;
  }
}
