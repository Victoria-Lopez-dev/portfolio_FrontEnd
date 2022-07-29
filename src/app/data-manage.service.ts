import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataManageService {

  constructor() { }

  logIn(user:string, pass:string){
    console.log(user);
    console.log(pass);
  }
}
