import { Component, Input, OnInit } from '@angular/core';
import {
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';
import { Slide, TransitionProperties } from './carousel-config.model';

import {
  scaleIn,
  scaleOut,
  fadeIn,
  fadeOut,
  flipIn,
  flipOut,
  jackIn,
  jackOut,
} from './carousel.animations';

@Component({
  selector: 'ascendion-play-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('slideAnimation', [
      /* fade */
      transition('void => ${this.transitionProperties.transitionStyle}', [
        useAnimation(fadeIn, { params: { time: '500ms' } }),
      ]),
      transition('${this.transitionProperties.transitionStyle} => void', [
        useAnimation(fadeOut, { params: { time: '500ms' } }),
      ]),
    ]),
  ],
})
export class CarouselComponent implements OnInit {
  @Input() slides: Slide[] = [];
  @Input() transitionProperties: TransitionProperties = {
    // Default values
    transitionStyle: 'fade',
    slideDirection: 'left',
    transitionDuration: 500, // milliseconds
  };

  // @Input() transitionDuration: number = 500;
  // @Input() slideDirection?: 'left' | 'right' | 'top' | 'bottom' = 'left';
  // @Input() transitionStyle: 'fade' | 'slide' | 'scale' | 'flip' = 'fade';

  currentSlideIndex = 0;

  ngOnInit() {
    setInterval(() => this.nextSlide(), 3000); // Autoplay every 3 seconds
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }
}
