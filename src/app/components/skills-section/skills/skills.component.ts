import { Component, OnInit } from '@angular/core';
import { ServicioNuevoService } from'../../../servicio-nuevo.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(public dataService:ServicioNuevoService) { }

  ngOnInit(): void {
  }

}
