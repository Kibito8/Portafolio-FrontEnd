import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username:string="";
  title = 'Portafolio';
  linkedin_image:string="/assets/img/Linkedin.png";
  constructor() { }

  ngOnInit(): void {
  }

}
