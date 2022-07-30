import { Component, OnInit } from '@angular/core';
import { ServicioNuevoService } from'../../servicio-nuevo.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor( public dataService:ServicioNuevoService) { }
   
  ngOnInit(): void {
  }

}
