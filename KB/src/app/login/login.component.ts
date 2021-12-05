import { User } from './../Model/User';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse, HttpResponse,  } from '@angular/common/http';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
 
})

export class LoginComponent {
  hide = true;
  unabel = false ;
  password = ''
  email =''
  //= new FormControl('', [Validators.required, Validators.email]);

  constructor(private servier: ServiceService , private router: Router ,public dialog: MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open(RegisterComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  //  fetchUser() {
  //    this.user= this.servier.checking();

  //   }

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  user?: User;
  ngOnInit() {
   
  }
  submit (){

// if(this.password ==null|| this.password == ''){
//   this.unabel = true;
// }
// else {

    this.servier.checking(this.password, this.email).subscribe(userInfo => {
      if (userInfo instanceof HttpResponse) {

        this.user = userInfo.body as User;
        this.router.navigateByUrl('/FAQ')

      }


    }, error => {
      if (error instanceof HttpErrorResponse) {
        this.router.navigateByUrl('/Register')


      }

    });}
  }
// }

