import { Component, OnInit } from '@angular/core';
import { ServicioNuevoService } from'../../servicio-nuevo.service';


@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  modelOpen:boolean=false
  constructor( private dataService:ServicioNuevoService ) { }

  ngOnInit(): void {
  }
  EditionOpen(){
    if(this.modelOpen == false){
      this.modelOpen=true
      this.dataService.edit = true
    }else{
      this.modelOpen=false
      this.dataService.edit = false
    }
  }

}
