import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'collab-comp-img-generator',
  templateUrl: './img-generator.component.html',
  styleUrls: ['./img-generator.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ImgGeneratorComponent implements OnInit {
  @Input() public imgUrl: string;
  @Input() public altText: string;
  @Input() public fontClassName: string;

  @ViewChild('loadSvgImage', {
    static: false,
  })
  public loadSvgImage: ElementRef<HTMLInputElement>;

  constructor() {}

  public ngOnInit(): void {
    this.altText = this.altText ? this.altText : '';
  }
}
