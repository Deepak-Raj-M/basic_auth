import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../_config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postData(url,params){
  	return this.http.post(config.apiUrl+url,params);
  }
}
