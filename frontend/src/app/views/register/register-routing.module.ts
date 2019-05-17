import { NgModule } from '@angular/core';
import { Routes, RouterModule,Router } from '@angular/router';
import { RegisterComponent } from './register.component';
import { SessionGuard } from '../../guards/session.guard';

const routes: Routes = [
	{
		path : '',
		component : RegisterComponent,
		canActivate : [SessionGuard]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
