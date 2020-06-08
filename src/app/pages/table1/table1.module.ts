import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Table1RoutingModule } from './table1-routing.module';
import { Table1Component } from './table1/table1.component';
import { AngularMaterialModule } from '../../shared/modules/angular-material';


@NgModule({
  declarations: [Table1Component],
  imports: [
    CommonModule,
    AngularMaterialModule,
    Table1RoutingModule
  ]
})
export class Table1Module { }
