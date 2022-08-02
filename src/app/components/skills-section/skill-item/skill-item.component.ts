import { Component, OnInit, Input } from '@angular/core';
import { ServicioNuevoService } from'../../../servicio-nuevo.service';
@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {

  @Input() skill={
    id:"",
    name:""
  }

  constructor(public dataService:ServicioNuevoService) { }

  ngOnInit(): void {
  }

}
