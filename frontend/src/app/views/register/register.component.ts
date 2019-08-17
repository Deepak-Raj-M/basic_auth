import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch,test } from '../../helpers/must-match.validator';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	regForm:FormGroup;
  constructor(private fb: FormBuilder,private apiHelper:ApiService,private router:Router) { }

  ngOnInit() {
  	this.regForm = this.fb.group({
      username: new FormControl('',[
					Validators.required,
					Validators.minLength(5),
					Validators.maxLength(15)
			]),
			fullName : new FormControl('',[
					Validators.required,
					Validators.minLength(5),
					Validators.maxLength(15)
			]),
			dob : new FormControl('',[
					Validators.required,
					Validators.maxLength(15)
			]),
			paswd : new FormControl('',[
					Validators.required,
					Validators.minLength(5),
					Validators.maxLength(15)
			]),
			retype_paswd : new FormControl('',[
					Validators.required
			]),
    },{
      validator: MustMatch('paswd', 'retype_paswd')
    });
  }

  getField(field){
  	return this.regForm.controls[field];
  }

  register(){
  	this.apiHelper.postData('register',this.regForm.value).subscribe((data:any)=>{
  		alert(data.message);
  		if(data.status == true){
  			this.router.navigate(['/login']);
  		}
  	});
  }

}
