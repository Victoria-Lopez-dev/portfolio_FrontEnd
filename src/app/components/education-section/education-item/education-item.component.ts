import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent implements OnInit {
  @Input() edHist =    {
    institude:" ",
    description:"",
    period:"",
    finished:""    
  };

  edit:boolean =false

  constructor() { }

  ngOnInit(): void {
  }

}
/*con el @Input en el hijo le aviso que voy a recibir una propiedad del padre, y le pongo un valor inicial por defecto*/
/* el @Output es para mandar info del hijo al padre*/
/* si ya hay mucha info para enviar, lo mejor es usar un servicio para que compartan info */