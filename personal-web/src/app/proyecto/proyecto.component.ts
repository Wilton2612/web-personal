import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  constructor( private router: Router)
  { }


  /*
  open1(){
    var URL:any  = "https://github.com/Wilton2612/Ventas-Repuestos";
    this.router.navigate(URL);
 }


 open2(){
  var URL:any  = "https://github.com/Wilton2612/Ventas-Repuestos";
  this.router.navigate(URL);
}


open3(){
  var URL:any  = "https://github.com/Wilton2612/web-personal";
  this.router.navigate(URL);
}*/





  ngOnInit() {
  }

}
