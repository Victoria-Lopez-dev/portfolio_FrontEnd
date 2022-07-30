import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-proyect-item',
  templateUrl: './proyect-item.component.html',
  styleUrls: ['./proyect-item.component.css']
})
export class ProyectItemComponent implements OnInit {
 @Input() proyect={
    nameProyect:"ajshdkj",
    createDate:'22/22/22',
    descriptionProyect:"sdfhskjdhfkshdfjhskfhskdhf",
    linkProyect:"ddd.com"
 }
 edit:boolean =false;
  constructor() { }

  ngOnInit(): void {
  }

}
