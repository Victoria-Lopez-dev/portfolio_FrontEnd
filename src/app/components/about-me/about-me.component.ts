import { Component, OnInit } from '@angular/core';
import { ServicioNuevoService } from'../../servicio-nuevo.service';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  constructor(public dataService:ServicioNuevoService) { }

  about:string="0.about";
  imagen:string="0.imagen";
  ngOnInit(): void {
  }; 



  
}
