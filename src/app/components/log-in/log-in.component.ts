import { Component, OnInit } from '@angular/core';
import { ServicioNuevoService } from'../../servicio-nuevo.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private dataService:ServicioNuevoService) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.dataService.openModal=false
  }

  EditionOpen(){
    this.dataService.edit = true
    this.dataService.openModal=false
  }

}

