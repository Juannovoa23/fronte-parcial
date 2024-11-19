import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContratosService } from '../../contratos.service';

@Component({
  selector: 'app-contratos-detalle',
  templateUrl: './contratos-detalle.component.html',
  styleUrls: ['./contratos-detalle.component.css']
})
export class ContratosDetalleComponent implements OnInit {
  contrato: any;

  constructor(
    private contratosService: ContratosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.contratosService.getContratoById(id).subscribe(data => {
      this.contrato = data;
    });
  }
}
