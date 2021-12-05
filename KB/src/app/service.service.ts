import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { 
  }
   req="http://localhost:8080/";

  getqustions(){
    let request =new HttpRequest("GET",this.req+"allQustions");
     return this.http.request(request);

  }

  checking(password?:string,email?:string){
    let url = `CheckingByPasswordAndEmail?email=${email}&password=${password}`
   let requestuser = new HttpRequest('GET',this.req+url);
   return this.http.request(requestuser);
  }
 
adduser(username?: string,password?: string,firstName?: string,lastName?: string, email?:string ){
  //addUser
  const url = `addUser?Firstname=${firstName}&Lasttname=${lastName}&username=${username}&password=${password}&email=${email}`;
 let requestuser1 = new HttpRequest("POST",this.req+url,null);
 
  return this.http.request(requestuser1);
  
  //request(requestuser1);
}


 
}
