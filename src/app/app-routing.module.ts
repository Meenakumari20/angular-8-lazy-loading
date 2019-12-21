import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{ path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }, 
{ path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
{ path: 'checkout', loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule) },
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
