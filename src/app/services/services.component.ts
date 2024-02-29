import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  backgroundSize: string = '980px';
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const target = event.target as Window | null;

    if (target) {
      const viewportWidth = target.innerWidth;
      this.backgroundSize = viewportWidth > 980 ? `${viewportWidth}px auto` : '980px auto';
    }
  }


  ngOnInit() {
    this.backgroundSize = window.innerWidth > 980 ? `${window.innerWidth}px auto` : '980px auto';
  }
}