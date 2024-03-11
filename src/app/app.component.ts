import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Lollipop';

  constructor(private router: Router, private metaTagService: Meta) { }

  isHomePage(): boolean {
    const route = this.router.url;
    return route === '/' || route === '/home';
  }

  ngOnInit() {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'čišćenje, usluge čišćenja, Lollipop-shine' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Lollipop-shine' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'description', content: 'Profesionalne usluge čišćenja na području Hrvatske. Pružamo kvalitetne usluge čišćenja za domove i poslovne prostore.' },
      { property: 'og:title', content: 'Profesionalne usluge čišćenja u Hrvatskoj' },
      { property: 'og:description', content: 'Kvalitetne usluge čišćenja na području Hrvatske.' },
      { property: 'og:image', content: 'URL_slike_povezane_s_vašim_servisom' },
      { property: 'og:url', content: 'www.lollipop-shine.hr' },
      { property: 'og:type', content: 'website' },
      { name: 'language', content: 'hr' },
      { charset: 'UTF-8' },
    ]);
  }
}
