import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

const MaterialComponnets = [
  MatTooltipModule
];

@NgModule({
  imports: [MaterialComponnets], 
  exports: [MaterialComponnets]
})
export class MaterialModule { }
