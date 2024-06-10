import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  @Input() id: string = "";

  ngOnInit(): void {
    console.log(this.id);
  }

  obtenerDetalle(id: string): void {
  }
}
