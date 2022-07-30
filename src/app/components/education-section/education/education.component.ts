import { Component, OnInit } from '@angular/core';
import { ServicioNuevoService } from'../../../servicio-nuevo.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(public dataService:ServicioNuevoService) { }
  

  bla(){
    console.log("toggleAddTask!");
    
  }

  ngOnInit(): void {
  }

}
/* desde el padre le mando la info y con un bucle lo segmento */
