import { ClienteInterface } from './../../../shared/interfaces/cliente-interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})



export class ClienteComponent {

  @Input()
  public cliente: ClienteInterface;

  constructor(){
    this.cliente = {
      nombre: '',
      apellido: ''
    }
  }

  ngOnInit(): void {

  }



}
