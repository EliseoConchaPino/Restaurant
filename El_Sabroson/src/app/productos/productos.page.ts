import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  private productos = [
    {
    id:'1',
    titulo: 'cazuela',
    imagenURL : "https://maridaje.emol.com/wp-content/uploads/2019/04/cazuela.jpg",
    comentarios: ["delicioso plato", "merece la pena probarlo"] 
    },
    {
    id:'2',
    titulo: 'lomo saltado',
    imagenURL : "https://jameaperu.com/wp-content/uploads/2020/03/lomo-saltado-de-pollo_700x465.jpg",
    comentarios: ["un plato de lujo", "excelente comida"] 
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
