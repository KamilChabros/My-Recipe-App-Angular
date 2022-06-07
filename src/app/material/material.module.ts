import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

const MaterialComponnets = [
  MatTooltipModule,
  MatIconModule,
  FlexLayoutModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports: [MaterialComponnets], 
  exports: [MaterialComponnets]
})
export class MaterialModule { }
