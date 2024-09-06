import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudRegistrationComponent } from './stud-registration/stud-registration.component';
import { StudListComponent } from './stud-list/stud-list.component';
import { StudViewComponent } from './stud-view/stud-view.component';
import { LandingpgComponent } from './landingpg/landingpg.component';

const routes: Routes = [
  {
    path: "",component:LandingpgComponent
  },
  {
    path: "registration",component: StudRegistrationComponent
  },
  {
    path: "list",component:StudListComponent
  },
  {
    path: "list/:id",component:StudViewComponent
  },
  { path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) 
  },
  { 
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) 
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
