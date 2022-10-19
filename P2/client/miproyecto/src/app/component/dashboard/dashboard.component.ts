import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private services : UserService) { }

  ngOnInit(): void {
  }
  getdata(){
    //retorna la informacion
    this.services.getdata().subscribe(
      (res:any)=>{
        console.log(res)
        alert(res.incremental)
      },
      (err)=>{
        console.log(err);
      }
    )

    

  }


  setdata(){
    var json ={
      dato:30
    }
    this.services.setdata(json).subscribe(
      (res)=>{
        alert("TODO bien")
        //insertar todo en un frame donde se vea 
      },(err)=>{
        console.log(err);
      }
    )

    

  }
}
