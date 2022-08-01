import { Component, OnInit, Input } from '@angular/core';
import { ServicioNuevoService } from'../../../servicio-nuevo.service';
@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {

  experienceArea:string='experience-section';
  @Input() experience=
  {
    id:"1",
    period:"1",
    job:"1",
    place:"1",
    description:"1"
  }

  constructor(public dataService:ServicioNuevoService) { }
  
  ngOnInit(): void {
  }

}
