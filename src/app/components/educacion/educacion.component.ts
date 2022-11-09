import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  img_arg: string = "/assets/img/arg-programa.png";
  img_fiunlz:string="/assets/img/fiunlzLogo.jpg";
  img_nu:string="/assets/img/NU-Numero1.png";
  
  constructor() { }

  ngOnInit(): void {
  }

}
