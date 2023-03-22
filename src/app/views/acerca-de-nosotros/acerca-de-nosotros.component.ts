import { ClienteService } from './../../shared/services/cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de-nosotros',
  templateUrl: './acerca-de-nosotros.component.html',
  styleUrls: ['./acerca-de-nosotros.component.css'],
})
export class AcercaDeNosotrosComponent implements OnInit {
  public listadoClientes: any;

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.recuperarClientes();
  }

  private recuperarClientes(): void {
    this.clienteService.recuperarClientes().subscribe({
      next: (data) => {
        this.listadoClientes = data;
      },
      error: (error) => {
        alert('There was an error in retrieving the data');
      },
    });
  }
}
