import { HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { qustion } from 'src/app/Model/Model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-fqa',
  templateUrl: './fqa.component.html',
  

})
export class FQAComponent implements OnInit {

  constructor(private servier:ServiceService) { 

  }
q:qustion[]=[];
  ngOnInit(): void {

this.servier.getqustions().subscribe(x=>{
  if(x instanceof HttpResponse)
  {
    this.q= x.body as qustion[];

  }
});

  }

}
