import { Component, Input, OnInit } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
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
      /* scale */
      transition('void => scale', this.createTransitionAnimation(scaleIn)),
      transition('scale => void', this.createTransitionAnimation(scaleOut)),

      // /* fade */
      // transition('void => fade', [
      //   useAnimation(fadeIn, {
      //     params: { time: '${this.transitionProperties.transitionDuration}ms' },
      //   }),
      // ]),
      // transition('fade => void', [
      //   useAnimation(fadeOut, {
      //     params: { time: '${this.transitionProperties.transitionDuration}ms' },
      //   }),
      // ]),

      // /* flip */
      // transition('void => flip', [
      //   useAnimation(flipIn, {
      //     params: { time: '${this.transitionProperties.transitionDuration}ms' },
      //   }),
      // ]),
      // transition('flip => void', [
      //   useAnimation(flipOut, {
      //     params: { time: '${this.transitionProperties.transitionDuration}ms' },
      //   }),
      // ]),

      // /* JackInTheBox */
      // transition('void => jackInTheBox', [
      //   useAnimation(jackIn, {
      //     params: { time: '${this.transitionProperties.transitionDuration}ms' },
      //   }),
      // ]),
      // transition('jackInTheBox => void', [
      //   useAnimation(jackOut, {
      //     params: { time: '${this.transitionProperties.transitionDuration}ms' },
      //   }),
      // ]),
    ]),
  ],
})
export class CarouselComponent implements OnInit {
  @Input() slides: Slide[] = [];
  @Input() transitionProperties: TransitionProperties = {
    // Default values
    transitionStyle: 'scale',
    slideDirection: 'left',
    transitionDuration: 500, // milliseconds
  };

  // @Input() transitionDuration: number = 500;
  // @Input() slideDirection?: 'left' | 'right' | 'top' | 'bottom' = 'left';
  // @Input() transitionStyle: 'fade' | 'slide' | 'scale' | 'flip' = 'fade';

  currentSlideIndex = 0;

  ngOnInit() {
    setInterval(() => this.nextSlide(), 3000); // Autoplay every 3 seconds
    console.log(this.transitionProperties.transitionDuration);
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }
  createTransitionAnimation(animationFn: AnimationReferenceMetadata) {
    const duration = this.transitionProperties.transitionDuration ?? 500;
    console.log(this.transitionProperties.transitionDuration);
    return [
      useAnimation(animationFn, {
        params: { time: `${duration}ms` },
      }),
    ];
  }
  // public slideTransitionStyle = this.transitionProperties.transitionStyle;
}
