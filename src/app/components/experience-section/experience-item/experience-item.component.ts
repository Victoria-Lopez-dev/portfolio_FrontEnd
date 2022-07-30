import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {

  @Input() experience=
  {
    period:"",
    job:"",
    description:""
  }
  edit:boolean=false;
  constructor() { }
  
  ngOnInit(): void {
  }

}
