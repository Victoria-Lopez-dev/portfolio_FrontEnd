import { Component, OnInit } from '@angular/core';
import { ServicioNuevoService } from'../../../servicio-nuevo.service';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(public dataService:ServicioNuevoService) { }

  ngOnInit(): void {
  }
}
