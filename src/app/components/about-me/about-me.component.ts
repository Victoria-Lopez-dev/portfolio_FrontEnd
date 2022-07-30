import { Component, OnInit } from '@angular/core';
import { ServicioNuevoService } from'../../servicio-nuevo.service';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  constructor(public dataService:ServicioNuevoService) { }

  ngOnInit(): void {
  }; 

  info:string="Soy Desarrolladora Web Full Stack ,amante de los animales y de la musica. En la actualidad me encuentro siendo parte del cuerpo docente de la facultad UTN asistiendo cursos de desarrollo web. Me concidero una persona dedicada y curiosa, con el objetivo constante de aprender, adquirir nuevos conocimientos y ser parte de experiencias dedicadas al desarrollo web.";
  

  
}
