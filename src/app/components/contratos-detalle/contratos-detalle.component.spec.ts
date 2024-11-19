import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratosDetalleComponent } from './contratos-detalle.component';

describe('ContratosDetalleComponent', () => {
  let component: ContratosDetalleComponent;
  let fixture: ComponentFixture<ContratosDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContratosDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
