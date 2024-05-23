import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGuard } from './authentication/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule), canActivate: [AuthGuard], data: { expectedRole: 'Admin' } },
  { path: 'stocks', loadChildren: () => import('./stock/stock.module').then(m => m.StockModule), canActivate: [AuthGuard], data: { expectedRole: 'Admin' } },
  { path: 'orders', loadChildren: () => import('./orders/order.module').then(m => m.OrdersModule), canActivate: [AuthGuard], data: { expectedRole: 'Seller' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
