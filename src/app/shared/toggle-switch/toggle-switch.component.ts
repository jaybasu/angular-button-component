import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'collab-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss'],
})
export class ToggleSwitchComponent implements OnInit {
  @Input() public id: string = '';
  @Input() public value: string = '';
  @Input() public required: boolean = false;
  @Input() public checked: boolean = false;
  @Input() public disabled: boolean = false;
  @Input() public isShowLabel: boolean = true;
  @Input() public label: string = '';
  @Input() public labelPosition: 'left' | 'right' = 'left';

  /**
   * Emits click event.
   */
  @Output() click = new EventEmitter<void>();
  /**
   * Emits event notifying other classes when a change in state occurs on a checkbox after a
   * click.
   *
   * @deprecated since v4 use `checked` and `checkedChange` instead
   */
  @Output() change = new EventEmitter<any>();

  // @ViewChild('loadSvgImage', {
  //   static: false,
  // })
  // public loadSvgImage: ElementRef<HTMLInputElement>;

  constructor() {}

  public ngOnInit(): void {
    // this.altText = this.altText ? this.altText : '';
  }

  /**
   * Toggle the selected state of the checkbox.
   */
  public toggle() {
    this.checked = !this.checked;
    console.log(this.checked);
  }
  /**
   * Handles click events on the `Checkbox` and emits changes to other classes.
   */
  onClick(event: Event) {
    // Disable default checkbox activation behavior which flips checked and resets indeterminate.
    // This allows the parent component to control the checked/indeterminate properties.
    // event.preventDefault();
    if (!this.disabled) {
      this.click.emit();
      this.toggle();
      return;
    }
  }
}
