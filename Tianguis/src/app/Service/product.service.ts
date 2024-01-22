import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url:string;
  private url2:string;
  producto:producto[]

  constructor(private http:HttpClient) { 
    this.url=environment.endpoint;
    this.url2='/api/products';
}


getProducts():Observable<producto[]> {

 /* const token=localStorage.getItem('token')
  const headers=new HttpHeaders().set('Authorization',`Bearer ${token}`);
  */
 //return this.http.get<producto[]> (`${this.url}${this.url2}`,{headers});
 return this.http.get<producto[]> (`${this.url}${this.url2}`);
}

getProductos(): Observable<producto[]> {
  return this.http.get<producto[]>(`${this.url}${this.url2}`);
} createProducto(producto: producto): Observable<producto[]> {
  return this.http.post<producto[]>(`${this.url}${this.url2}`,producto);
}



deleteProdcto(producto: producto) {
  return this.http.delete<producto>(`${this.url}${this.url2}` + "/" + producto.id);
}


getProducto(id: String){

  
  return this.http.get(`${this.url}${this.url2}${id}`);
}


saveProducto(producto:producto){
  return this.http.post(`${this.url}${this.url2}`,producto);
}

deleteProducto(id: string){
  return this.http.delete(`${this.url}/api/products/${id}`);
}


updateProducto(producto:producto) {
  return this.http.put<producto>(this.url+ "/api/products/" + producto.id, producto);
}
}
