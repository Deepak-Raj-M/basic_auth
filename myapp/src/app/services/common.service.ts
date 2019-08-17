import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  isLoggedin(){
  	if(localStorage.getItem('user')){
  		return localStorage.getItem('user');
  	}
  	return false;
  }

  setSesstion(id){
  	localStorage.setItem('user',id);
  	return true;
  }

  logout(){
  	localStorage.clear();
  	return true;
  }
}
