import { Component, OnInit } from '@angular/core';
import { ServicioNuevoService } from'../../servicio-nuevo.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})

export class EditFormComponent implements OnInit {
  item:any={
    nameItem:"",
    itemPeriod:""
  };
    data =this.dataService.area
  constructor(public dataService:ServicioNuevoService) { }

  ngOnInit(): void {
  }
  closeModal(){
    this.dataService.EditButton=false    
  }

}
