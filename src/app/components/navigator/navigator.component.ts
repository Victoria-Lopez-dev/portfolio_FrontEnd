import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  modelOpen:boolean=false
  constructor( ) { }

  ngOnInit(): void {
  }
  logIn(){
    console.log("abrir form de log in")
  }
}
