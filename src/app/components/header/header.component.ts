import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username:string="";
  title = 'Portafolio';
  linkedin_image:string="/assets/img/Linkedin.png";

  ngOnInit(): void {
  }

  constructor(public dialog : MatDialog){}

  public openDialogReg(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(RegisterComponent,dialogConfig);
  }


}
