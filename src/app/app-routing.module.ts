import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCompanyComponent } from './login-company/login-company.component';
import { RegiterCompanyComponent } from './regiter-company/regiter-company.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { ShowStockComponent } from './show-stock/show-stock.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { addstockGuard } from './guards/addstock.guard';

const routes: Routes = [
  {path:'login' ,component:LoginCompanyComponent},
  {path:'register',component:RegiterCompanyComponent},
  {path:'addstock',component:AddStockComponent,canActivate:[addstockGuard]},
  {path:'showstock',component:ShowStockComponent,
    children:[
      {path:'edit/:id',component:EditStockComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
