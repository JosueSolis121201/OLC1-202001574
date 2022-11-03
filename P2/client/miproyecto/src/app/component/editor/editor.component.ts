import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor(private services : UserService,private domSanitizer: DomSanitizer) { }

  imagen:any = "";
  str:string = "";

  diccionario:any = null;
  elementos:any;
  valores:any;




  ngOnInit(): void {
  }
  Graficar(){
    //retorna la informacion
    this.imagen = "";
    this.services.graficar(btoa(this.str)).subscribe(
      
      (res:any)=>{
        this.imagen = this.domSanitizer.bypassSecurityTrustResourceUrl(res.imagen)
        alert(" GRAFICAR FIN")

      },
      (err)=>{
        console.log(err)
        alert("ERROR AL GRAFICAR")
        this.imagen = "";
      }
    )

    

  }


  Ejecutar(){
    this.services.Ejecutar(btoa(this.str)).subscribe(
      (res:any)=>{
        this.diccionario = res.tabla.diccionario
        //insertar todo en un frame donde se vea 


        alert("EJECUTAR FIN")
      },(err)=>{
        this.diccionario = null;
        alert("ERROR AL EJECUTAR")
      }
    )

  }
}


