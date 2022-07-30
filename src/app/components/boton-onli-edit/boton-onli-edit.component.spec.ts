import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonOnliEditComponent } from './boton-onli-edit.component';

describe('BotonOnliEditComponent', () => {
  let component: BotonOnliEditComponent;
  let fixture: ComponentFixture<BotonOnliEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonOnliEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonOnliEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
