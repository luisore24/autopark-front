import { Component } from '@angular/core';
import { JwtRequest } from '../../_model/JwtRequest';
import { FormControl, FormGroup, UntypedFormGroup } from '@angular/forms';
import { LoginService } from '../../_service/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,MatMenuModule,MatSidenavModule, MatToolbarModule,MatIconModule,MatButtonModule,MatFormFieldModule,MatInputModule,MatCardModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hide = true;

  usuario! : string;
  password! : string;

  form! : UntypedFormGroup

  constructor(private loginService : LoginService, private router : Router, private snack : MatSnackBar) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      'usuario' : new FormControl(''),
      'password' : new FormControl('')
    });

  }

  iniciarSesion(){
    let user = new JwtRequest();
    user.username = this.usuario;
    user.password = this.password;
    this.loginService.login(user).subscribe(data => {
      if(data){
        let jwt = JSON.stringify(data.jwtToken).replace(/["]+/g, '');
        sessionStorage.setItem('access_token',jwt);
        this.snack.open("Bienvenido", "AVISO", {
          duration : 3000
        });
        this.router.navigate(['proforma']);
      }
      else{
        //this.clearFields();
        this.router.navigate(['login']);
        this.snack.open("Error en Credenciales", "AVISO", {
          duration : 3000
        });
      }
    });
  }

  clearFields(){
    this.password = "";
    this.form = new FormGroup({
      'usuario' : new FormControl('')
    });
  }
}
