import { Component, OnInit } from '@angular/core';
import {DataManageService} from '../../data-manage.service'


@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  modelOpen:boolean=false
  constructor( public dataManageService :DataManageService) { }

  ngOnInit(): void {
  }
  logIn(){
    this.dataManageService.logIn("hola","chau")
  }
}
