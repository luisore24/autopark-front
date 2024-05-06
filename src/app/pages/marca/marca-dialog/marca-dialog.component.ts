import { Component, Inject } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Marca } from '../../../_model/Marca';
import { MarcaService } from '../../../_service/marca.service';
import { MarcaComponent } from '../marca.component';
import {MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'app-marca-dialog',
  standalone: true,
  imports: [MatDialogModule,FormsModule,MatSelectModule,MatButtonModule,MatInputModule,MatCardModule,MatFormFieldModule],
  templateUrl: './marca-dialog.component.html',
  styleUrl: './marca-dialog.component.css'
})
export class MarcaDialogComponent {
  marca! : Marca;


  constructor(private marcaService : MarcaService,
  public dialogRef : MatDialogRef<MarcaComponent>,
  @Inject(MAT_DIALOG_DATA) public data : Marca) { }

  ngOnInit(): void {
    this.marca = new Marca();
    this.marca.id = this.data.id;
    this.marca.des_marca = this.data.des_marca
  }

  save(){
    if(!this.data == null){
      this.marcaService.updateMarca(this.marca).subscribe(() => {
        this.marcaService.getMarcas().subscribe(data =>{
          this.marcaService.refresh.next(data);

        });
      });
    }
    else{
      this.marcaService.createMarca(this.marca).subscribe(() => {
        this.marcaService.getMarcas().subscribe(data =>{
          this.marcaService.refresh.next(data);
        });
      });
    }
    this.dialogRef.close();
  }

  cancel(){
    this.dialogRef.close();
  }


}
