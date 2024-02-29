import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselNavigationComponent } from './carousel-navigation.component';

describe('CarouselNavigationComponent', () => {
  let component: CarouselNavigationComponent;
  let fixture: ComponentFixture<CarouselNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselNavigationComponent]
    });
    fixture = TestBed.createComponent(CarouselNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
