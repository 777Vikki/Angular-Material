import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Table1Component } from './table1/table1.component';


const routes: Routes = [
  {
    path: '',
    component: Table1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Table1RoutingModule { }
