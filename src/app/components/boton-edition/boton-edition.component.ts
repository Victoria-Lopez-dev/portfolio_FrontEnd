import { Component, OnInit } from '@angular/core';
import { ServicioNuevoService } from'../../servicio-nuevo.service';
@Component({
  selector: 'app-boton-edition',
  templateUrl: './boton-edition.component.html',
  styleUrls: ['./boton-edition.component.css']
})
export class BotonEditionComponent implements OnInit {

  constructor(public dataService:ServicioNuevoService) { }

  ngOnInit(): void {
  }

}
