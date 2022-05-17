import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from "@angular/flex-layout";

const MaterialComponnets = [
  MatTooltipModule,
  MatIconModule,
  FlexLayoutModule
];

@NgModule({
  imports: [MaterialComponnets], 
  exports: [MaterialComponnets]
})
export class MaterialModule { }
