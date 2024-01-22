import { Component, OnInit } from '@angular/core';
import { producto } from 'src/app/models/producto';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
import { ProductService } from '../../Service/product.service';

@Component({
  selector: 'app-producto-list2',
  templateUrl: './producto-list2.component.html',
  styleUrls: ['./producto-list2.component.css']
})
export class ProductoList2Component implements OnInit {

  producto: producto[] = [];

  constructor(
    private ServiceService: ServiceService,private router: Router,
    private productService:ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProductos()
    .subscribe(data => {
      this.producto = data;
    })
    
  }
  

}
