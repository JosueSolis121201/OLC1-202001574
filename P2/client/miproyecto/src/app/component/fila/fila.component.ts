import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.css']
})
export class FilaComponent implements OnInit {

  @Input() llave:any;
  @Input() objetoValor:any;


  constructor() { }

  ngOnInit(): void {
  }

}
