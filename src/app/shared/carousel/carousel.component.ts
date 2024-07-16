import { Component, Input, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

interface Slide {
  // Image URL or any content to be displayed
  content: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        // Left/top to right/bottom
        style({ transform: 'translateX(-100%)' }),
        animate(
          '{{duration}}ms {{easing}}',
          style({ transform: 'translateX(0)' })
        ),
      ]),
      transition(':decrement', [
        // Right/bottom to left/top
        style({ transform: 'translateX(100%)' }),
        animate(
          '{{duration}}ms {{easing}}',
          style({ transform: 'translateX(0)' })
        ),
      ]),
    ]),
  ],
})
export class CarouselComponent implements OnInit {
  @Input() slides: Slide[] = [];
  @Input() transitionDuration: number = 500;
  @Input() slideDirection: 'left' | 'right' | 'top' | 'bottom' = 'left';

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
