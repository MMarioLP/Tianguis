import { Component, OnInit, HostBinding } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Service/product.service';
import { producto } from '../../models/producto';

import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-createprod',
  templateUrl: './createprod.component.html',
  styleUrls: ['./createprod.component.css']
})
export class CreateprodComponent implements OnInit {
  

  @HostBinding('class') classes='row'

  producto: producto={

    id: 0,
    nombre:'',
    precio:0,
    image:'',
    descripcion:''
    
   
  };
  edit: boolean=false;



constructor(private service:ServiceService, private router:Router, private activeRoute: ActivatedRoute
  ,private product:ProductService){};


ngOnInit(){
  const params = this.activeRoute.snapshot.params;
  if(params.id){
    this.product.getProducto(params.id)
    .subscribe(
    res=>{
      console.log(Response);
      const producto=Response;
      this.edit=true;
     
    },
    err => console.error(err)
   )
  }

}


  savep(){
    delete this.producto.id;
    
   this.product.saveProducto(this.producto)
   .subscribe(
    res=>{
      console.log(res);
      this.router.navigate(['/list2'])
     
    },
    err => console.error(err)
   );

}
updateP(){

 
}

}