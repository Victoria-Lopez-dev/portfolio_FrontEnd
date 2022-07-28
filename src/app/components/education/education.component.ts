import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  hola:string="HOLA";
  edItem=[
    {
      institude:"BLABLABLABALA",
      description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, et?",
      period:"00/00/00",
      finished:true
    },
    {
      institude:"UYRIUYFDIUSHJKDF",
      description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, et?",
      period:"00/00/00",
      finished:false
    }
  ]

  bla(){
    console.log("toggleAddTask!");
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
/* desde el padre le mando la info y con un bucle lo segmento */
