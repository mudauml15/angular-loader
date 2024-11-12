import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';
import { DataComponent } from './data/data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoaderComponent, DataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app';

  isLoading = true;

  constructor() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
}
