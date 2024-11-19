import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosFormularioComponent } from './contratos-formulario.component';

describe('ContratosFormularioComponent', () => {
  let component: ContratosFormularioComponent;
  let fixture: ComponentFixture<ContratosFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContratosFormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratosFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
