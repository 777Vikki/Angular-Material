import {Routes} from '@angular/router';
import {DashboardLayoutComponent} from './dashboard-layout.component';

export const routes: Routes = [
{
    path: "home",
    component: DashboardLayoutComponent,
    loadChildren: () => 
        import("./../../pages/home/home.module").then(mod => mod.HomeModule)
},
{
    path: "material-table",
    component: DashboardLayoutComponent,
    loadChildren: () => 
        import("./../../pages/table/table.module").then(mod => mod.TableModule)
}
];
