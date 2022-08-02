import { Component } from '@angular/core';
import { ServicioNuevoService } from'./servicio-nuevo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'porfolio-FrontEnd';
  constructor(public dataService:ServicioNuevoService){}
}
