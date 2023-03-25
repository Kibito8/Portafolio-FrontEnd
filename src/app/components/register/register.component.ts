import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  bool=true;

  constructor(){}

  ngOnInit(): void {
    
  }

  changeReg(){
    if(this.bool){
      this.bool=false;
    }
  }

  register(form:NgForm){
    const email=form.value.email
    const password=form.value.password
  }

}