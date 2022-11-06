/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { PlantaListComponent } from './planta-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Planta } from '../planta'

describe('PlantaListComponent', () => {
  let component: PlantaListComponent;
  let fixture: ComponentFixture<PlantaListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaListComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 3; i++){
      const planta = new Planta(
        faker.datatype.number(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.word(),
        faker.datatype.number(),
        faker.lorem.word(),
        faker.lorem.word()
      );
      component.plantas.push(planta);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 1 <div.header> elements', () => {
    expect(debug.queryAll(By.css('div.header'))).toHaveSize(1);
  });

  it('should have 12 <div.planta> elements', () => {
    expect(debug.queryAll(By.css('div.planta'))).toHaveSize(12);
  });

});
