import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL = "http://localhost:1000"
  constructor(private http:HttpClient) { }

  graficar(texto:string){
    return this.http.post(`${this.URL}/graficar`,{
      contenido:texto
    })
  }

  Ejecutar(texto:any){
    return this.http.post(`${this.URL}/ejecutar`,{
      contenido:texto
    })
  }
}
