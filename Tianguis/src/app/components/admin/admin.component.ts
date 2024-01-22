import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { producto } from 'src/app/models/producto';
import { usuario } from 'src/app/models/usuario';
import { ServiceService } from '../../Service/service.service';
import { UserService } from '../../Service/user.service';
import { ProductService } from '../../Service/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  usuarios: usuario[];
  producto: producto[];
  constructor(private service: ServiceService, private router: Router,
    private user:UserService
    ,private product: ProductService
    ) { }
 
  ngOnInit(): void {
    this.service.getUsuarios()
    .subscribe(data => {
      this.usuarios = data;
    })

    this.product.getProductos()
    .subscribe(data => {
      this.producto = data;
    })
  }
  Delete(usuario:usuario){
    this.service.deleteUsuario(usuario)
    .subscribe(data=>{
      this.usuarios=this.usuarios.filter(u=>u!==usuario);
      alert("Usuario eliminado...");
    })
  }



    Delete2(producto:producto){
      this.product.deleteProdcto(producto)
      .subscribe(data=>{
        this.producto=this.producto.filter(u=>u!==producto);
        alert("Producto eliminado...");
      })
}




}

