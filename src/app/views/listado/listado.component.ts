import { EntradaService } from './../../shared/services/entrada.service';
import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  public listadoEntradas: any;

  constructor(private entradaService: EntradaService) {}

  ngOnInit(): void {
    this.recuperarEntradas();
  }

  public mostrarTitulo(nombre: string): void {
    alert(`Entrada seleccionada: ${nombre}.`);
  }

  private recuperarEntradas(): void {
    this.entradaService.recuperarEntradas().subscribe({
      next: (data) => {
        this.listadoEntradas = data;
      },
      error: (error) => {
        alert('Ha habido un error al recibir los datos de juegos');
      },
    });
  }
}
