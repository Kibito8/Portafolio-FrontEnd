import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  bool = true;

  changeLog(){
    if(this.bool){
      this.bool=false;
    }
  }
}
