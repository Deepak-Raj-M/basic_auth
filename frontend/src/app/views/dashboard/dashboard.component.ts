import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonService } from '../../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	userDet : any = {};
	session;
  constructor(private api:ApiService,private common:CommonService,private router:Router) { }

  ngOnInit() {
  	this.session = this.common.isLoggedin()
  	this.api.postData('get_user/'+this.session,{}).subscribe((data:any)=>{
  		if(data && data.status == true){
  			this.userDet = data.result;
  		}
  	});
  }

  onClick(){
  	this.common.logout();
  	this.router.navigate(['/login']);
  }

}
