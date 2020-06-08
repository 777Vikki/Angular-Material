import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout.component';

export const routes: Routes = [
  {
    path: 'material-table1',
    component: DashboardLayoutComponent,
    loadChildren: () => import('../../pages/table1/table1.module').then(mod => mod.Table1Module),
  },
  {
    path: 'dashboard1',
    component: DashboardLayoutComponent,
    loadChildren: () =>
      import('../../pages/dashboard1/dashboard1.module').then(
        (mod) => mod.Dashboard1Module
      ),
  },
  {
    path: 'home',
    component: DashboardLayoutComponent,
    loadChildren: () =>
      import('./../../pages/home/home.module').then((mod) => mod.HomeModule),
  },
  {
    path: 'material-table',
    component: DashboardLayoutComponent,
    loadChildren: () =>
      import('./../../pages/table/table.module').then((mod) => mod.TableModule),
  },
];
