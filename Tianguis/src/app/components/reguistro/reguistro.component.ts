import { HttpErrorResponse } from '@angular/common/http';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usuario } from 'src/app/models/usuario';
import { UserService } from '../../Service/user.service';



@Component({
  selector: 'app-reguistro',
  templateUrl: './reguistro.component.html',
  styleUrls: ['./reguistro.component.css']
})
export class ReguistroComponent implements OnInit {
  


  username: string='';
  nombre: string='';
  apellidos: string='';
  pass: string='';
  confirmPassword:string='';
  
  loading:boolean=false;

  constructor(private router:Router,private userService:UserService){};

  
 Registro(){
  //validar cel usuario ngrese valores
  if(this.username==''||this.nombre==''||this.apellidos==''||this.pass==''||this.confirmPassword==''){
  alert('Todos los campos son obligatorios')    
  return;
  }
  
  //validamos que las passwrd sehan iguales
  if(this.pass!=this.confirmPassword){
    alert('Las contraseñas no son iguales')    
  return;
  }
  //creamo el body

  const user:usuario={
    username:this.username,
    nombre:this.nombre,
    apellidos:this.apellidos,
    pass:this.pass
  }

  this.loading=true;
  this.userService.sigIn(user).subscribe({
    next: (v) => { 
      this.loading=false;
      alert(`el usuario ${this.username} fue registrado con exito`);
      this.router.navigate(['/login']);},
    error: (e:HttpErrorResponse) => { 
      this.loading=false;
    this.msgError(e);
     }
})
 }

 msgError(e:HttpErrorResponse){
  if(e.error.msg){
    alert(e.error.msg);
    
    }else{
      alert('Upps ocurrio un error, comuniquese  con el administrador');
    }
 }

  ngOnInit(): void {
  }


}
