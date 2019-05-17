import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { SessionGuard } from '../../guards/session.guard';

const routes: Routes = [
	{
		path : '',
		component : LoginComponent,
		canActivate : [SessionGuard]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
