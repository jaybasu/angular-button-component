// export interface SlideDirection {
//   Left = 'left',
//   Right = 'right',
//   Top = 'top',
//   Bottom = 'bottom'
// }

// enum TransitionStyle {
//   Fade = 'fade' // Add more styles as needed
// }

export interface Slide {
  slideImageUrl: string; // Or other data as needed
  slideHeading: string;
  slideDescriptionText?: string; // Allow for additional slide data
}

export interface TransitionProperties {
  transitionStyle: 'fade' | 'slide' | 'scale' | 'flip'; // Or other data as needed
  slideDirection?: 'left' | 'right' | 'top' | 'bottom';
  transitionDuration: number; // Allow for additional slide data
}
