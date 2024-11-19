import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratosService {
  private apiUrl = 'http://localhost:8080/api/contratos';

  constructor(private http: HttpClient) {}

  getContratos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getContratoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createContrato(contrato: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, contrato);
  }

  updateContrato(id: number, contrato: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, contrato);
  }

  deleteContrato(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
