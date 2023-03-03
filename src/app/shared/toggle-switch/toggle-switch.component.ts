import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'collab-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss'],
})
export class ToggleSwitchComponent implements OnInit {
  // @Input() public imgUrl: string;
  // @Input() public altText: string;
  // @Input() public fontClassName: string;

  // @ViewChild('loadSvgImage', {
  //   static: false,
  // })
  // public loadSvgImage: ElementRef<HTMLInputElement>;

  constructor() {}

  public ngOnInit(): void {
    // this.altText = this.altText ? this.altText : '';
  }
}
