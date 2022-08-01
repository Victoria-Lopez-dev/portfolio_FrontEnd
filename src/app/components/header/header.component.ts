import { Component, OnInit,Input } from '@angular/core';
import { ServicioNuevoService } from'../../servicio-nuevo.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() headerInfo={
    nameDev:"",
    titleDev:""
  }
  header:string="0.header"
  constructor( public dataService:ServicioNuevoService) { }
   
  ngOnInit(): void {
  }

}
