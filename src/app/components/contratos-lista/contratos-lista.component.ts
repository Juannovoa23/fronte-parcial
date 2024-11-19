import { Component, OnInit } from '@angular/core';
import { ContratosService } from '../../contratos.service';

@Component({
  selector: 'app-contratos-lista',
  templateUrl: './contratos-lista.component.html',
  styleUrls: ['./contratos-lista.component.css']
})
export class ContratosListaComponent implements OnInit {
  contratos: any[] = [];

  constructor(private contratosService: ContratosService) {}


  ngOnInit(): void {
    this.contratosService.getContratos().subscribe(data => {
      this.contratos = data;
    });
  }
}
