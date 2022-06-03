import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  AddButtonConfig,
  ButtonConfig,
  IconButtonConfig,
  LinkConfig,
} from './button-config.model';
// import { cancelButtonConfig, submitButtonConfig } from './button.unitility';

@Component({
  selector: 'collab-comp-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() public type?: string;
  @Input() public variant?: string;
  @Input() public buttonConfig: ButtonConfig;
  @Input() public linkConfig: LinkConfig;
  @Input() public addButtonConfig: AddButtonConfig;
  @Input() public iconButtonConfig: IconButtonConfig;
  @Input() public isBtnDisbaled: boolean;
  @Output() public onBtnClick?: EventEmitter<string> =
    new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  // ngOnChanges(changes: SimpleChanges) {
  //   if (this.variant === 'submit') {
  //     this.buttonConfig = { ...submitButtonConfig };
  //   }
  //   if (this.variant === 'cancel') {
  //     this.buttonConfig = { ...cancelButtonConfig };
  //   }
  // }

  onClick(event) {
    this.onBtnClick.emit(event);
  }
}
