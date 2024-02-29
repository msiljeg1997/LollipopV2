import { Component, ViewEncapsulation } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent {

  constructor(private modalService: NgbModal) { }

  images = [1,2,3].map((n) => `/assets/slika${n}.jpeg`);
  showNavigationIndicators = true;
  showNavigationArrows = true;
  selectedImage: string = '';

  openLargerImage(img: any) {
    this.modalService.open({ size: 'lg' });
    this.selectedImage = img;
  }
}
