import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  proyects=[{
      nameProyect:"GIFOS",
      createDate:'22/22/22',
      descriptionProyect:"sdfhskjdhfkshdfjhskfhskdhf",
      linkProyect:"ddd.com"
  },{
    nameProyect:"Podcast",
    createDate:'22/22/22',
    descriptionProyect:"sdfhskjdhfkshdfjhskfhskdhf",
    linkProyect:"ddd.com"
  }

  ]
}
