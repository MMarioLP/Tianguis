import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usuario } from '../models/usuario';
import { producto } from '../models/producto';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  usuario: usuario[];
  producto:producto[];



  private url:string;
  private url2:string;

  private API_URI='http://localhost:3000/api/products'
  constructor(private http:HttpClient,  ) { 
    this.url=environment.endpoint;
    this.url2='/api/users';
 
    
  }

 
  
  getUsuarios(): Observable<usuario[]> {
    return this.http.get<usuario[]>(`${this.url}${this.url2}`);
  } 

  getGames() {
    return this.http.get(`${this.API_URI}`);
  }


 
  setUsuarios() {
    this.getUsuarios().subscribe(async data => {
      this.usuario = data;
    })

    console.log(this.usuario)
  }

  deleteUsuario(usuario: usuario) {
    return this.http.delete<usuario>(`${this.url}${this.url2}` + "/" + usuario.id);
  }



  getUsuarioId(id: number) {
    return this.http.get<usuario>(`${this.url}${this.url2}`+ "/" + { id });
  }
  updateUsuario(usuario: usuario) {
    return this.http.put<usuario>(`${this.url}${this.url2}` + "/" + usuario.id, usuario);
  }






}