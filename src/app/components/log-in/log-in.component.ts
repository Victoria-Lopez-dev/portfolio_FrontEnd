import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

import { ServicioNuevoService } from'../../servicio-nuevo.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  tiping:boolean=false

  constructor(private dataService:ServicioNuevoService , private formBuilder:FormBuilder) { }
  ngOnInit(): void {
  }

  form:FormGroup =this.formBuilder.group({
    password:['',[]],
    mail:['',[]]
  })
  closeModal(){
    this.dataService.openModal=false
  }

  EditionOpen(){
    if(this.tiping == true){
        this.dataService.edit = true  
    }
    
    this.dataService.getUsers();
    this.dataService.openModal=false
  }

  show(){
    this.tiping =true
  }
}

