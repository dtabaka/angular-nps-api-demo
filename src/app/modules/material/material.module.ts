import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
