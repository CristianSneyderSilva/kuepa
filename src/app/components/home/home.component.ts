import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public data: string[] = ['Kennedy', 'Suba', 'Chapinero'];
  
  public tipos: string[] = ['Bachillerato', 'Ingles', 'Tecnico Desarrollo'];

  constructor() { }

  ngOnInit() {
  }

}
