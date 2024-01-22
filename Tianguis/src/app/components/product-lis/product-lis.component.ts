import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { producto } from 'src/app/models/producto';
import { MessageService } from 'src/app/Service/message.service';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-product-lis',
  templateUrl: './product-lis.component.html',
  styleUrls: ['./product-lis.component.css']
})
export class ProductLisComponent implements OnInit {

  @Input() producto: producto;

  constructor(
    private messageService: MessageService
  ) { }


  ngOnInit(): void {
    
  }

  

  addToCart(): void {
    this.messageService.sendMessage(this.producto);
  }

  }
  console.log(producto);
