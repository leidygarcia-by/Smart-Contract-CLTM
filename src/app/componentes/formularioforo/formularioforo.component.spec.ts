import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioforoComponent } from './formularioforo.component';

describe('FormularioforoComponent', () => {
  let component: FormularioforoComponent;
  let fixture: ComponentFixture<FormularioforoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioforoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioforoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
