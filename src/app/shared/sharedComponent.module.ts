import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ImgGeneratorComponent } from './img-generator/img-generator.component';
import { ToggleSwitchComponent } from './toggle-switch/toggle-switch.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    ImgGeneratorComponent,
    ToggleSwitchComponent,
    CarouselComponent,
  ],
  exports: [
    ButtonComponent,
    ImgGeneratorComponent,
    ToggleSwitchComponent,
    CarouselComponent,
  ],
})
export class SharedCompModule {}
