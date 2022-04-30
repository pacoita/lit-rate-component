import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'showcaseWebApp';

  selectedValue = 0;

  displaySelection(event: Event) {
    this.selectedValue = (event as CustomEvent<number>).detail;
  }
}
