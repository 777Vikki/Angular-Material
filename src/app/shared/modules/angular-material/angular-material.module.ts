import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

const Material = [
  MatButtonModule,
  MatToolbarModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, Material],
  exports: [Material]
})
export class AngularMaterialModule {}
