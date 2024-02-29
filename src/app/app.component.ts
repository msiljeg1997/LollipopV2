import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lollipop';

  constructor(private router: Router) { }

  
  isHomePage(): boolean {
    const route = this.router.url;
    return route === '/' || route === '/home';
}
}
