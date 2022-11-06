import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';

@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html',
  styleUrls: ['./planta-list.component.css']
})
export class PlantaListComponent implements OnInit {

  plantas: Array<Planta> = [];
  plantasInterior: number = 0;
  plantasExterior: number = 0;
  constructor(private plantaService: PlantaService) { }

  ngOnInit() {
    this.getPlantas();
  }

  getPlantas(): void {
    this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
      this.plantasInterior = this.plantas.filter(p => p.tipo.includes('Interior')).length;
      this.plantasExterior = this.plantas.filter(p => p.tipo.includes('Exterior')).length;
    });
  }

}
