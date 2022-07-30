import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills=[
  {
    name:"HTML",
    porcentageSkill:'80%'
  },{
    name:"CSS",
    porcentageSkill:'80%'
  },
  {
    name:"HTML",
    porcentageSkill:'80%'
  },{
    name:"CSS",
    porcentageSkill:'80%'
  },
  {
    name:"HTML",
    porcentageSkill:'80%'
  },{
    name:"CSS",
    porcentageSkill:'80%'
  },
  {
    name:"HTML",
    porcentageSkill:'80%'
  },{
    name:"CSS",
    porcentageSkill:'80%'
  }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
