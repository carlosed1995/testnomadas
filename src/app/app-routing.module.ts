import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { LoginComponent } from './modules/login/login.component';
import { ShoesComponent } from './modules/shoes/shoes.component';
import { SuppliersComponent } from './modules/suppliers/suppliers.component';
import { SellersComponent } from './modules/sellers/sellers.component';
import { StoresComponent } from './modules/stores/stores.component';
import { ReadshoesComponent } from './modules/readshoes/readshoes.component';
import { CreateshoesComponent } from './modules/createshoes/createshoes.component'; 
import { UpdateshoesComponent } from './modules/updateshoes/updateshoes.component';
import { AuthenticationGuard } from './guard/authentication.guard';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: ShoesComponent, canActivate: [AuthenticationGuard]
  },{
    path: 'suppliers',
    component: SuppliersComponent, canActivate: [AuthenticationGuard]
  },{
    path: 'sellers',
    component: SellersComponent, canActivate: [AuthenticationGuard]
  },{
    path: 'stores',
    component: StoresComponent, canActivate: [AuthenticationGuard]
  },{
    path: 'createshoes',
    component: CreateshoesComponent, canActivate: [AuthenticationGuard]
  },{
    path: 'viewshoes/:id',
    component: ReadshoesComponent, canActivate: [AuthenticationGuard]
  },{
    path: 'updateshoes/:id',
    component: UpdateshoesComponent, canActivate: [AuthenticationGuard]
  },
 
],

},
{ path: 'login', component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
