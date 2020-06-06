import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { NavbarModule } from '../components/navbar/navbar.module';
import { AngularMaterialModule } from '../shared/modules/angular-material';
import { routes as DashboardRoutes } from './dashboard-layout/dashboard-layout.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DashboardLayoutComponent],
  imports: [
    CommonModule,
    NavbarModule,
    AngularMaterialModule,
    RouterModule.forChild([...DashboardRoutes]),
  ],
  exports: [DashboardLayoutComponent],
})
export class LayoutsModule {}
