import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewStockComponent } from './new-stock/new-stock.component';
import { StocksComponent } from './stocks/stocks.component';

const routes: Routes = [
  { path: '', component: StocksComponent },
  { path: 'newStock', component: NewStockComponent },
  { path: 'stocks', component: StocksComponent }
  // ,  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
