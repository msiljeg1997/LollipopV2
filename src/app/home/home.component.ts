import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  isMobile = window.innerWidth < 450;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const width = event.target.innerWidth;
    const rightImage = this.el.nativeElement.querySelector('.right-image');
  
    if (rightImage) {
      if (width < 430) {
        this.renderer.setStyle(rightImage, 'display', 'block');
        this.renderer.setStyle(rightImage, 'top', '0');
      } else if (width >= 430 && width < 770) {
        this.renderer.setStyle(rightImage, 'display', 'none');
      } else if (width >= 770 && width <= 995) {
        this.renderer.setStyle(rightImage, 'display', 'block');
        this.renderer.setStyle(rightImage, 'right', '-35%');
      } else if (width > 995 && width <= 1200) {
        this.renderer.setStyle(rightImage, 'display', 'block');
        this.renderer.setStyle(rightImage, 'right', '-50%');
      } else {
        this.renderer.setStyle(rightImage, 'display', 'block');
        this.renderer.setStyle(rightImage, 'right', '-30%');
      }
    }
  }
}
