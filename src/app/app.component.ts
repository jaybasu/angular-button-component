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
    iconURL: 'icon-Requirements',
    imageUrl: '',
    text: 'Test it',
    linkURL: '',
    outline: true,
    shape: 'Square',
  };
}
