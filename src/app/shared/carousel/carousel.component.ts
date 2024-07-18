import { Component, Input, OnInit } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { Slide, TransitionProperties, Carousel } from './carousel-config.model';

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
    transitionStyle: 'scale',
    slideDirection: 'left',
    transitionDuration: 500, // milliseconds
  };

  @Input() carousel: Carousel = {
    // Default values
    autoPlay: true, // Or other data as needed
    slideChangeAutoPlayInterval: 3000,
  };

  // @Input() transitionDuration: number = 500;
  // @Input() slideDirection?: 'left' | 'right' | 'top' | 'bottom' = 'left';
  // @Input() transitionStyle: 'fade' | 'slide' | 'scale' | 'flip' = 'fade';

  currentSlideIndex = 0;
  autoplayInterval: ReturnType<typeof setInterval> | undefined;

  ngOnInit() {
    // setInterval(() => this.nextSlide(), 3000); // Autoplay every 3 seconds
    console.log(this.transitionProperties.transitionDuration);
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, this.carousel.slideChangeAutoPlayInterval); // Adjust interval as needed
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
