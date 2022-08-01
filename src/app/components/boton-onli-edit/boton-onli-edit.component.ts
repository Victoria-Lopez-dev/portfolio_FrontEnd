import { Component, OnInit,Input } from '@angular/core';
import { ServicioNuevoService } from'../../servicio-nuevo.service';

@Component({
  selector: 'app-boton-onli-edit',
  templateUrl: './boton-onli-edit.component.html',
  styleUrls: ['./boton-onli-edit.component.css']
})
export class BotonOnliEditComponent implements OnInit {
  @Input() area:string=""
  constructor(public dataService:ServicioNuevoService) { }

  ngOnInit(): void {
  }
  edition(){
    this.dataService.itemSelectChange(this.area)
  }
}
