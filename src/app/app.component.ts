import { Component, OnInit, VERSION } from '@angular/core';
import {
  AddButtonConfig,
  ButtonConfig,
  IconButtonConfig,
  LinkConfig,
} from './shared/button/button-config.model';

import {
  Slide,
  TransitionProperties,
} from './shared/carousel/carousel-config.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  name = 'Angular ' + VERSION.major;

  public submitButtonConfig: ButtonConfig = {
    text: 'Submit',
    buttonSize: '',
    buttonType: 'primary',
    iconURL: '',
    imageUrl: '',
    linkURL: '',
  };

  public resetButtonConfig: ButtonConfig = {
    text: 'Reset',
    buttonSize: '',
    buttonType: 'secondary',
    iconURL: 'icon-Requirements',
    iconPosition: 'left',
    imageUrl: '',
    linkURL: '',
  };

  public linkConfig: LinkConfig = {
    hrefVal: 'test',
    linkText: 'Let me put large text',
    iconURL: 'icon-Requirements',
    iconPosition: 'left',
  };

  public addButtonConfig: AddButtonConfig = {
    buttonSize: '',
    iconURL: 'icon-Requirements',
    text: 'Test it',
    linkURL: '',
  };

  public iconButtonConfig: IconButtonConfig = {
    buttonSize: 'large',
    iconURL: 'icon-Download',
    imageUrl: '',
    text: 'Test it',
    linkURL: '',
    outline: false,
    shape: 'Square',
  };

  public mainPageCarousel: Slide[] = [
    {
      slideImageUrl:
        'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
      slideHeading: 'Welcome to Our Presentation',
      slideDescriptionText: 'A Brief Overview',
    },
    {
      slideImageUrl:
        'https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4',
      slideHeading: 'Our Mission',
      slideDescriptionText: 'Empowering people through innovation',
    },
    {
      slideImageUrl:
        'https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ',
      slideHeading: 'Key Product Features',
      slideDescriptionText: 'Lets check it',
    },
    {
      slideImageUrl:
        'https://fastly.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o',
      slideHeading: 'Key Product Features',
      slideDescriptionText: 'Lets check it',
    },
    {
      slideImageUrl:
        'https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc',
      slideHeading: 'Key Product Features',
      slideDescriptionText: 'Lets check it',
    },
  ];

  public test: TransitionProperties = {
    // Default values
    transitionStyle: 'slide',
    slideDirection: 'left',
    transitionDuration: 500,
  };
}
