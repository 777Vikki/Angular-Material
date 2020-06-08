import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Dashboard1RoutingModule } from './dashboard1-routing.module';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import {AngularMaterialModule} from '../../shared/modules/angular-material';
import { Dashboard1HeaderComponent } from './dashboard1-header/dashboard1-header.component';
import { Dashboard1FooterComponent } from './dashboard1-footer/dashboard1-footer.component';
import { Dashboard1SidebarComponent } from './dashboard1-sidebar/dashboard1-sidebar.component';


@NgModule({
  declarations: [Dashboard1Component, Dashboard1HeaderComponent, Dashboard1FooterComponent, Dashboard1SidebarComponent],
  imports: [
    CommonModule,
    Dashboard1RoutingModule,
    AngularMaterialModule
  ]
})
export class Dashboard1Module { }
