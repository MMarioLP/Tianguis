import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { MessageService } from '../../Service/message.service';
import { StorageService } from '../../Service/storage.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CartItemModel } from '../../models/product-item-model';
import { producto } from '../../models/producto';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];
  total = 0;
  public payPalConfig?: IPayPalConfig;
  showSuccess:any;


  constructor(
    private messageService: MessageService,
    private storageService: StorageService,
    private router:Router,
    private spinner: NgxSpinnerService
    ) {

  }

  ngOnInit(): void {
    this.initConfig();

    if (this.storageService.existsCart()) {
      this.cartItems = this.storageService.getCart();
    }
    this.getItem();
    this.total = this.getTotal();

  }
  private initConfig(): void {
    this.payPalConfig = {
      currency: 'MXN',
      clientId: environment.clientId,
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'MXN',
            value: this.getTotal().toString(),
            breakdown: {
              item_total: {
                currency_code: 'MXN',
                value: this.getTotal().toString()
              }
            }
          },
          items: this.getItemsList()
        }]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then((details:any) => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });

      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', 
        JSON.stringify(data));
        
       
    
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);


      },
      onError: err => {
        console.log('OnError', err);

      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);

      }
    };
  }

  getItemsList(){

      const items:any[]=[];
      let item={};
      this.cartItems.forEach((it: CartItemModel) => {
      item = {
        name: it.productName,
        quantity: it.qty,
        unit_amount: {value: it.productPrice, currency_code: 'MXN'}
      };
      items.push(item);
      });
      return items;
  }

  getItem(): void {

    this.messageService.getMessage().subscribe((product: producto) => {
      let exists = false;
      this.cartItems.forEach(item => {
        if (item.productId === product.id) {
          exists = true;
          item.qty++;
        }
      });
      if (!exists) {
        const cartItem = new CartItemModel(product);
        this.cartItems.push(cartItem);
      }
      this.total = this.getTotal();
      this.storageService.setCart(this.cartItems);
    });


  }

  getTotal(): number {
    let total = 0;
    this.cartItems.forEach(item => {
      total += item.qty * item.productPrice;
    });
    return +total.toFixed(2);

  }
  emptyCart(): void {
    this.cartItems = [];
    this.total = 0;
    this.storageService.clear();
  }
  deleteItem(i: number): void {
    if (this.cartItems[i].qty > 1) {
      this.cartItems[i].qty--;
    } else {
      this.cartItems.splice(i, 1);
      this.storageService.setCart(this.cartItems);
    }

  }
}
