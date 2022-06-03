import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ImgGeneratorComponent } from './img-generator/img-generator.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, ImgGeneratorComponent],
  exports: [ButtonComponent, ImgGeneratorComponent],
})
export class SharedCompModule {}
