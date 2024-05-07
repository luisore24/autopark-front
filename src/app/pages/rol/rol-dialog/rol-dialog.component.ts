import { Component, Inject } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { RolDTO } from '../../../_model/RolDTO';
import { RolService } from '../../../_service/rol.service';
import { RolComponent } from '../rol.component';

@Component({
  selector: 'app-rol-dialog',
  standalone: true,
  imports: [MatDialogModule,FormsModule,MatSelectModule,MatButtonModule,MatInputModule,MatCardModule,MatFormFieldModule],
  templateUrl: './rol-dialog.component.html',
  styleUrl: './rol-dialog.component.css'
})
export class RolDialogComponent {
  rol! : RolDTO;


  constructor(private rolService : RolService,
  public dialogRef : MatDialogRef<RolComponent>,
  @Inject(MAT_DIALOG_DATA) public data : RolDTO) { }

  ngOnInit(): void {
    this.rol = new RolDTO();
    this.rol.idRol = this.data.idRol;
    this.rol.role = this.data.role;
  }

  save(){
    if(this.data.idRol){
      this.rolService.updateRol(this.rol).subscribe(() => {
        this.rolService.getRoles().subscribe(data =>{
          this.rolService.refresh.next(data);

        });
      });
    }
    else{
      this.rolService.createRol(this.rol).subscribe(() => {
        this.rolService.getRoles().subscribe(data =>{
          this.rolService.refresh.next(data);
        });
      });
    }
    this.dialogRef.close();
  }

  cancel(){
    this.dialogRef.close();
  }

}
