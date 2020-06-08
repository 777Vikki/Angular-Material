import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table/table.component';
import {AngularMaterialModule} from "../../shared/modules/angular-material";


@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    TableRoutingModule
  ]
})
export class TableModule { }
