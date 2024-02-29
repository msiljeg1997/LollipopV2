import { Component, HostListener } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  backgroundSize: string = '980px';


  constructor(private router: Router) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const target = event.target as Window | null;
    if (target) {
      const viewportWidth = target.innerWidth;
      this.backgroundSize = viewportWidth > 980 ? `${viewportWidth}px auto` : '980px auto';
    }
  }


  isHomePage(): boolean {
    const route = this.router.url;
    return route === '/' || route === '/home';
}

  ngOnInit() {
    this.backgroundSize = window.innerWidth > 980 ? `${window.innerWidth}px auto` : '980px auto';
  }
}
