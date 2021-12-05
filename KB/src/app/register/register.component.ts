import { Component, OnInit } from '@angular/core';
import { User } from './../Model/User'; 
import { FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse, HttpResponse,  } from '@angular/common/http';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',

})
export class RegisterComponent implements OnInit {
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  email?:string ;
  constructor(private servier: ServiceService , private router: Router ) { }

  ngOnInit(): void {

  }

saveData(){
this.servier.adduser(this.username,this.password,this.firstName,this.lastName, this.email).subscribe(userInfo => {
  if (userInfo instanceof HttpResponse) {

    this.router.navigateByUrl('/')
  }
  });
}}