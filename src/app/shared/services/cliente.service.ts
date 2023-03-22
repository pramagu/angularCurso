import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient: HttpClient) { }

  public recuperarClientes(): Observable<any>{
    return this.httpClient.get<any>('https://tiendajuegos.herokuapp.com/api/clientes')
  }
}
