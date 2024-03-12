import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef, private router: Router, public http: HttpClient) { }
  backgroundSize: string = '980px';
  isMobile = window.innerWidth < 479;
  feedbackMessage: string = '';
  isSubmitted: boolean = false;

  contactForm = new FormGroup({
    name: new FormControl(''),
    contact: new FormControl(''),
    message: new FormControl(''),
  });


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


  onSubmit() {
    this.http.post('https://lollipop-shine.hr/send_mail/index.php', this.contactForm.value)
      .subscribe(response => {
        this.feedbackMessage = 'Zahtjev Poslan!';
        this.isSubmitted = true;
        this.contactForm.reset();


        setTimeout(() => {
          this.isSubmitted = false;
        }, 5000);
      }, error => {
        console.error(error);
        this.feedbackMessage = 'Problem kod slanja zahtjeva';
        this.isSubmitted = true;
        setTimeout(() => {
          this.isSubmitted = false;
        }, 5000);
      });
  }

  scrollToForm() {
    const form = this.el.nativeElement.querySelector('.section_slika');
    form.scrollIntoView({ behavior: 'smooth' });
  }

  @HostListener('window:resize', ['$event'])
  onResize2(event: Event) {
    const target = event.target as Window | null;
    if (target) {
      const viewportWidth = target.innerWidth;
      this.backgroundSize =
        viewportWidth > 980 ? `${viewportWidth}px auto` : '980px auto';
    }
  }

  ngOnInit() {
    this.backgroundSize =
      window.innerWidth > 980 ? `${window.innerWidth}px auto` : '980px auto';
  }
}
