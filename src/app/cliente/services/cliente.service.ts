import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Cliente, ClienteAll } from '../interfaces/cliente.interface';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(private http: HttpClient) {}
  _baseUrl = environment.apiUrl;

  getClientes(): Observable<Cliente[]> {
    const url = `${this._baseUrl}/clientes`;
    return this.http.get<Cliente[]>(url);
  }

  getClienteById(id: number): Observable<ClienteAll> {
    const url = `${this._baseUrl}/clientes/show/${id}`;
    return this.http.get<ClienteAll>(url);
  }
  removeClienteById(id: number): Observable<any> {
    const url = `${this._baseUrl}/clientes/${id}`;
    return this.http.delete<any>(url);
  }

  addCliente(cliente: Cliente): Observable<Cliente> {
    const url = `${this._baseUrl}/clientes`;
    return this.http.post<Cliente>(url, cliente);
  }

  updateCliente(cliente: Cliente): Observable<Cliente> {
    const url = `${this._baseUrl}/clientes/${cliente.id}`;
    return this.http.put<Cliente>(url, cliente);
  }
}
