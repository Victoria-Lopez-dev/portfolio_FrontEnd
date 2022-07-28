import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }; 

  info:string="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis distinctio voluptas dolorum nobis doloribus asperiores laudantium inventore animi, quis placeat minus assumenda odit, nostrum ducimus culpa delectus optio cum aut.";
  


  
}
