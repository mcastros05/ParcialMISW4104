import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantaListComponent } from './planta-list/planta-list.component';



@NgModule({
  declarations: [PlantaListComponent],
  exports: [PlantaListComponent],
  imports: [
    CommonModule,
  ]
})
export class PlantaModule { }
