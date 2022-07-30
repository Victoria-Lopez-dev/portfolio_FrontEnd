import { Component, OnInit,Input } from '@angular/core';
import { ServicioNuevoService } from'../../../servicio-nuevo.service';
@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent implements OnInit {
  @Input() edHist =    {
    title:" ",
    place:"",
    description:"",
    period:"",
    finished:""    
  };
  constructor(public dataService:ServicioNuevoService) { }

  ngOnInit(): void {
  }

}
/*con el @Input en el hijo le aviso que voy a recibir una propiedad del padre, y le pongo un valor inicial por defecto*/
/* el @Output es para mandar info del hijo al padre*/
/* si ya hay mucha info para enviar, lo mejor es usar un servicio para que compartan info */