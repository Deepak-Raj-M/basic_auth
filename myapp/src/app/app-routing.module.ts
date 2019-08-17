import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path : 'login',
		loadChildren : './views/login/login.module#LoginModule'
	},
	{
		path : 'register',
		loadChildren : './views/register/register.module#RegisterModule'
	},
	{
		path : 'dashboard',
		loadChildren : './views/dashboard/dashboard.module#DashboardModule'
	},
	{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
