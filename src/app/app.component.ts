import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { LoginService } from './_service/login.service';
import { MatDividerModule } from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
//import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatExpansionModule, CommonModule, RouterModule, RouterOutlet,MatSnackBarModule,MatButtonModule,MatDividerModule,MatSidenavModule,MatSlideToggleModule,MatIconModule,MatMenuModule,MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'autopark_front';


  logged = false;

  constructor(public loginService: LoginService, private router : Router){ 
    //this.title.setTitle("System Solutions");  , private title : Title
  }

  ngOnInit() : void{
  }

  cerrarSesion(){
    this.loginService.logout();
    this.router.navigate(['login']);
  }

  isLogged(){
    return false;
    //his.loginService.isLogged();
  }

}
