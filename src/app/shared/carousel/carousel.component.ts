import { Component, Input, OnInit } from '@angular/core';
import { transition, trigger, useAnimation, group } from '@angular/animations';
import { Slide, TransitionProperties, Carousel } from './carousel-config.model';

import {
  scaleIn,
  scaleOut,
  // slideOutLeft,
  // slideInRight,
  slideIn,
  slideOut,
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
      // transition('void => scale', this.createTransitionAnimation(scaleIn)),
      // transition('scale => void', this.createTransitionAnimation(scaleOut)),

      /* scale */
      transition('void => scale', [
        useAnimation(scaleIn, {
          params: { time: '500ms' },
        }),
      ]),
      transition('scale => void', [
        useAnimation(scaleOut, {
          params: { time: '500ms' },
        }),
      ]),

      /* slide */
      transition(':enter', [
        useAnimation(slideIn, {
          params: { time: '500ms' },
        }),
      ]),
      transition(':leave', [
        useAnimation(slideOut, {
          params: { time: '500ms' },
        }),
      ]),

      // transition(
      //   'void => slide',
      //   group([
      //     useAnimation(slideOutLeft, { params: { time: '2s' } }),
      //     useAnimation(slideInRight, { params: { time: '2s' } }),
      //   ])
      // ),
      // transition(
      //   'slide => void',
      //   group([
      //     // Reverse the animations for the decrement transition
      //     useAnimation(slideInRight, { params: { time: '2s' } }),
      //     useAnimation(slideOutLeft, { params: { time: '2s' } }),
      //   ])
      // ),

      /* fade */
      transition('void => fade', [
        useAnimation(fadeIn, {
          params: { time: '500ms' },
        }),
      ]),
      transition('fade => void', [
        useAnimation(fadeOut, {
          params: { time: '500ms' },
        }),
      ]),

      /* flip */
      transition('void => flip', [
        useAnimation(flipIn, {
          params: { time: '500ms' },
        }),
      ]),
      transition('flip => void', [
        useAnimation(flipOut, {
          params: { time: '500ms' },
        }),
      ]),

      /* JackInTheBox */
      transition('void => jackInTheBox', [
        useAnimation(jackIn, {
          params: { time: '500ms' },
        }),
      ]),
      transition('jackInTheBox => void', [
        useAnimation(jackOut, {
          params: { time: '500ms' },
        }),
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

  @Input() carousel: Carousel = {
    // Default values
    width: 1000,
    height: 350,
    description: 'Ascendion AVA Play Carousel',
    autoPlay: true, // Or other data as needed
    slideChangeAutoPlayInterval: 3000,
  };

  // @Input() transitionDuration: number = 500;
  // @Input() slideDirection?: 'left' | 'right' | 'top' | 'bottom' = 'left';
  // @Input() transitionStyle: 'fade' | 'slide' | 'scale' | 'flip' = 'fade';

  currentSlideIndex = 0;
  autoplayInterval: ReturnType<typeof setInterval> | undefined;

  ngOnInit() {
    if (!this.slides?.length) {
      console.error('No slides found.');
      return;
    }
    if (!this.carousel.autoPlay) {
      console.error('Carousel autoplay is disabled.');
      return;
    }
    if (this.carousel.slideChangeAutoPlayInterval <= 0) {
      console.error('slideChangeAutoPlayInterval is missing or invalid.');
      return;
    }
    if (this.carousel.autoPlay) {
      this.startAutoplay();
    }
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, this.carousel.slideChangeAutoPlayInterval);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      // Check if the interval exists before clearing
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = undefined; // Reset the interval ID
    }
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }

  // createTransitionAnimation(animationFn: AnimationReferenceMetadata) {
  //   const duration = this.transitionProperties.transitionDuration;
  //   console.log('this.transitionProperties.transitionDuration');
  //   return [
  //     useAnimation(animationFn, {
  //       params: { time: `${duration}ms` },
  //     }),
  //   ];
  // }
  // public slideTransitionStyle = this.transitionProperties.transitionStyle;

  ngOnDestroy() {
    this.stopAutoplay(); // Stop the timer
  }
}
