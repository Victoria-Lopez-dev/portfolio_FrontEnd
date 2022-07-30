import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonEditionComponent } from './boton-edition.component';

describe('BotonEditionComponent', () => {
  let component: BotonEditionComponent;
  let fixture: ComponentFixture<BotonEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
