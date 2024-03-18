import { Component, ViewEncapsulation } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent {
  constructor(private modalService: NgbModal) { }
  showNavigationIndicators = true;
  showNavigationArrows = true;
  selectedImage: string = '';
  images = [
    { type: 'image', src: '/assets/gal2.jpeg' },
    { type: 'image', src: '/assets/gal3.jpeg' },
    { type: 'image', src: '/assets/gal4.jpeg' },
    { type: 'image', src: '/assets/gal5.jpeg' },
    { type: 'image', src: '/assets/gal6.jpeg' },
    { type: 'image', src: '/assets/gal7.jpeg' },
    { type: 'image', src: '/assets/gal8.jpeg' },
    { type: 'image', src: '/assets/gal9.jpeg' },
    { type: 'image', src: '/assets/gal10.jpeg' },
    { type: 'image', src: '/assets/gal11.jpeg' },
    { type: 'image', src: '/assets/gal13.jpeg' },
    { type: 'image', src: '/assets/gal14.jpeg' },
    { type: 'image', src: '/assets/gal18.jpeg' },
    // ...
  ];
}
