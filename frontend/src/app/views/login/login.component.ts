import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { FormGroup,  FormBuilder,  Validators,FormControl } from '@angular/forms';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	loginForm:FormGroup;
  constructor(private fb: FormBuilder,private apiHelper:ApiService,private common:CommonService,private router : Router) {
  	if(this.common.isLoggedin()){
  		this.router.navigate(['/dashboard']);
  	}
  }

  ngOnInit() {
  	this.loginForm = this.fb.group({
      username: new FormControl('',[
					Validators.required,
					Validators.minLength(5),
					Validators.maxLength(15)
			]),
			paswd : new FormControl('',[
					Validators.required,
					Validators.minLength(5),
					Validators.maxLength(15)
			]),
    });
  }

  getField(field){
  	return this.loginForm.controls[field];
  }

  onSubmit(){
  	this.apiHelper.postData('login',this.loginForm.value).subscribe((data:any)=>{
  		alert(data.message);
  		if(data.status == true){
  			this.common.setSesstion(data.result);
  			this.router.navigate(['/dashboard']);
  		}
  	});
  }

}
