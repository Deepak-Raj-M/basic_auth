import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  isLoggedin(){
  	if(localStorage.getItem('session')){
  		return localStorage.getItem('session');
  	}
  	return false;
  }

  setSesstion(id){
  	localStorage.setItem('session',id);
  	return true;
  }

  logout(){
  	localStorage.clear();
  	return true;
  }
}
