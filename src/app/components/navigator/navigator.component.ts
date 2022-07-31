import { Component, OnInit } from '@angular/core';
import { ServicioNuevoService } from'../../servicio-nuevo.service';


@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

 

  constructor(public dataService:ServicioNuevoService) { }


  ngOnInit(): void {
  }
 

  open() {
    this.dataService.openModal=true;
  }

  close(){
    this.dataService.edit=false;
  }

}
