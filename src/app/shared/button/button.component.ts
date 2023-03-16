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

@Component({
  selector: 'collab-comp-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  /**
   * Input type. 'button' | 'link' | 'add' | 'icon'. Default: 'button'
   */
  @Input() public type: 'button' | 'link' | 'add' | 'icon' = 'button';
  // @Input() public configType!: ButtonConfig | LinkConfig | AddButtonConfig | IconButtonConfig;
  @Input() public variant?: string;
  /**
   * ButtonConfig Object
   *
   * @param  {Object}  ButtonConfig         The wizard data
   * @param  {String}  ButtonConfig.buttonType    The wizard's name
   * @param  {string}   ButtonConfig.buttonSize  A list of spells the wizard knows
   * @param  {string} ButtonConfig.iconURL     The wizards age
   * @param {string}  ButtonConfig.iconPosition               The message about the wizard
   * @param {string}  ButtonConfig.imageUrl               The message about the wizard
   * @param {string}  ButtonConfig.text               The message about the wizard
   * @param {string}  ButtonConfig.linkURL               The message about the wizard
   *
   * <pre> ButtonConfig {
   * buttonType: 'primary' | 'secondary' | 'error'; // primary or secondary or error
   * buttonSize?: string; // 'small' | 'large'
   * iconURL?: string; // provide iconURL
   * iconPosition?: 'left' | 'right'; // left or right
   * imageUrl: string;
   * text: string; // Button label
   * linkURL: string;
   * } </pre>
   */
  @Input() public buttonConfig!: ButtonConfig;
  /**
   * LinkConfig Object
   * <pre> LinkConfig {
   * hrefVal: string;
   * linkText: string;
   * target?: string;
   * iconURL?: string; // provide iconURL
   * iconPosition?: string; // left or right
   * } </pre>
   */
  @Input() public linkConfig!: LinkConfig;
  /**
   * LinkConfig Object
   * <pre> AddButtonConfig {
   * buttonSize: string; // small
   * iconURL: string; // provide iconURL
   * text: string;
   * linkURL: string;
   * }</pre>
   */
  @Input() public addButtonConfig!: AddButtonConfig;
  /**
   * LinkConfig Object
   * <pre> IconButtonConfig {
   * buttonSize: 'small' | 'medium' | 'large'; // small or medium or large
   * iconURL: string; // provide iconURL
   * imageUrl: string;
   * text: string;
   * linkURL: string;
   * outline: boolean; // can be yes or no based on style. Default 'No'
   * shape?: string; // can be round or square based on design. Default square
   * }</pre>
   */
  @Input() public iconButtonConfig!: IconButtonConfig;
  @Input() public isBtnDisbaled: boolean | undefined;
  @Output() public onBtnClick: EventEmitter<string> =
    new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onClick(event: any) {
    this.onBtnClick!.emit(event);
  }
}
