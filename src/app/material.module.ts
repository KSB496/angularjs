import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
 
  imports: [
   
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],

  exports: [
   
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,MatFormFieldModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,MatRadioModule,MatSelectModule,MatTableModule,MatPaginatorModule
  ], 
  
})
export class MaterialModule { }
