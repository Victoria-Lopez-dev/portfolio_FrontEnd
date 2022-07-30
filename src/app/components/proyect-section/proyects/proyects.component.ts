import { Component, OnInit } from '@angular/core';
import { ServicioNuevoService } from'../../../servicio-nuevo.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  constructor(public dataService:ServicioNuevoService) { }

  ngOnInit(): void {
  }
}
