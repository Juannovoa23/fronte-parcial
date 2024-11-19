import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContratosService } from '../../contratos.service';

@Component({
  selector: 'app-contratos-formulario',
  templateUrl: './contratos-formulario.component.html',
  styleUrls: ['./contratos-formulario.component.css']
})
export class ContratosFormularioComponent implements OnInit {
  contrato: any = {};
  isEditMode: boolean = false;

  constructor(
    private contratosService: ContratosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      this.contratosService.getContratoById(id).subscribe(data => {
        this.contrato = data;
      });
    }
  }

  saveContrato(): void {
    if (this.isEditMode) {
      this.contratosService.updateContrato(this.contrato.id, this.contrato).subscribe(() => {
        this.router.navigate(['/contratos']);
      });
    } else {
      this.contratosService.createContrato(this.contrato).subscribe(() => {
        this.router.navigate(['/contratos']);
      });
    }
  }
}
s
