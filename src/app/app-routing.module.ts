import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'stocks', loadChildren: () => import('./stock/stock.module').then(m => m.StockModule) },
  { path: 'orders', loadChildren: () => import('./orders/order.module').then(m => m.OrdersModule) },
  { path: 'login', loadChildren: () => import('./authentication/auth.module').then(m => m.AuthModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
