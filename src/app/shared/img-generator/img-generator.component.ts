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
  /**
   * Type of Image
   */
  @Input() public imageType: 'image' | 'icon' = 'icon';
  /**
   * What is the Image URL?
   */
  @Input() public imgUrl: string = '';
  /**
   * Define Icon font class name. Complete list of icons are available at "https://www.figma.com/file/KRK7iLKuoaKV7pqnRg4U0P/%5BExternal%5D%5DDesign-System?node-id=157%3A2653&t=xyfCC4XCGmWwTR0q-0"
   */
  @Input() public fontClassName: string = '';
  @Input() public fontSize:
    | 'icon--sm'
    | 'icon--md'
    | 'icon--lg'
    | 'icon--xl'
    | 'icon--xxl'
    | 'icon--xxxl' = 'icon--md';
  altValue: string = '';

  /**
   * Define AltText of the Image? This is important for Accessibility. Define this when imageType = image.
   */
  @Input() public imageAltText: string = '';

  /**
   * Define AltText of the Image?
   *
   * @optional
   *
   */
  iconAltText: string = '';

  @ViewChild('loadSvgImage', {
    static: false,
  })
  public loadSvgImage!: ElementRef<HTMLInputElement>;

  constructor() {}

  public ngOnInit(): void {
    this.imageAltText = this.imageAltText ? this.imageAltText : ' ';
    // this.iconAltText = this.fontClassName;
  }

  get fontClassNames() {
    this.iconAltText = this.fontClassName;
    return `${this.fontClassName} ${this.fontSize}`;
  }
}
