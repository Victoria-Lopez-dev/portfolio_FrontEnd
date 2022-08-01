import { Component, OnInit } from '@angular/core';
import { ServicioNuevoService } from'../../servicio-nuevo.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})

export class EditFormComponent implements OnInit {
  item:any;
  
    data =this.dataService.areaEdit;

  constructor(public dataService:ServicioNuevoService) { }

  ngOnInit(): void {
  }
  closeModal(){
    this.dataService.EditButton=false    
  }

}
