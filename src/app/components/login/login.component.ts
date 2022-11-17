import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: FormGroup;
  bool = true;

  // Inyectamos en el constructor el formBuilder
  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private dialogRef : MatDialogRef<LoginComponent>) {
    // Grupo de contoles para el formulario de login
    this.form= this.formBuilder.group({
      username:['',[Validators.required,Validators.minLength(5),Validators.maxLength(12)]],
      password:['',[Validators.required,Validators.minLength(8)]],
      email:['',[Validators.required,Validators.email]]
    })
  }

  ngOnInit(): void {}

  cerrar(){
    this.dialogRef.close(this.form.value)
  }

  get Password(){
    return this.form.get("password");
  }

  get Mail(){
    return this.form.get("email");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid(){
    return this.Mail?.touched && !this.Mail?.valid;
  }

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del comportamiento submit de un form
    event.preventDefault;

    if(this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podriamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Formulario Enviado!")
      this.dialogRef.close(this.form.value)
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template
      this.form.markAllAsTouched();
    }
  }

  openDialogReg(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(RegisterComponent,dialogConfig);
  }

  changeLog(){
    if(this.bool){
      this.bool=false;
    }
  }

  changeReg(){
    this.dialogRef.close(this.form.value);
    this.openDialogReg();
  }

}
