import { Component, Input, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Slide } from './carousel-config.model';

@Component({
  selector: 'ascendion-play-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  // animations: [
  //   trigger('slideAnimation', [
  //     /* fade */
  //     transition('void => fade', [
  //       useAnimation(fadeIn, { params: { time: '500ms' } }),
  //     ]),
  //     transition('fade => void', [
  //       useAnimation(fadeOut, { params: { time: '500ms' } }),
  //     ]),
  //   ]),
  // ],
})
export class CarouselComponent implements OnInit {
  @Input() slides: Slide[] = [];
  @Input() transitionDuration: number = 500;
  @Input() slideDirection?: 'left' | 'right' | 'top' | 'bottom' = 'left';
  @Input() transitionStyle: 'fade' | 'slide' | 'scale' | 'flip' = 'fade';

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
