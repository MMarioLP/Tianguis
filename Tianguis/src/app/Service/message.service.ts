import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message = new Subject();

  constructor() { }

  sendMessage(producto: producto): void {
    this.message.next(producto);
  }

  getMessage(): Observable<any> {
    return this.message.asObservable();
  }
}
