import { Component, OnInit, VERSION } from '@angular/core';
import {
  AddButtonConfig,
  ButtonConfig,
  IconButtonConfig,
  LinkConfig,
} from './shared/button/button-config.model';

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

  // public slides: Slide[] = [
  //   {
  //     imageUrl: "https://example.com/image1.jpg",
  //     title: "Welcome to Our Presentation",
  //     subtitle: "A Brief Overview"
  //   },
  //   {
  //     imageUrl: "https://example.com/image2.png",
  //     title: "Our Mission",
  //     description: "Empowering people through innovation"
  //   },
  //   {
  //     imageUrl: "https://example.com/image3.svg",
  //     title: "Key Product Features",
  //     features: ["Fast", "Reliable", "User-friendly"]
  //   }
  // ];
}
