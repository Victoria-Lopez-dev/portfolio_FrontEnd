import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  experiences=[{
    period:"22/22/22",
    job:"Puesto",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, et?"
  },
  {
    period:"22/22/22",
    job:"Puesto",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, et?"
  },
  {
    period:"22/22/22",
    job:"Puesto",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, et?"
  }]
}
