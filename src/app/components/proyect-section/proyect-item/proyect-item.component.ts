import { Component, OnInit,Input} from '@angular/core';
import { ServicioNuevoService } from'../../../servicio-nuevo.service';
@Component({
  selector: 'app-proyect-item',
  templateUrl: './proyect-item.component.html',
  styleUrls: ['./proyect-item.component.css']
})
export class ProyectItemComponent implements OnInit {
 @Input() proyect={
    nameProyect:"",
    createDate:'',
    descriptionProyect:"",
    linkProyect:"",
    linkUrl:""
 }
  constructor(public dataService:ServicioNuevoService) { }

  ngOnInit(): void {
  }

}
