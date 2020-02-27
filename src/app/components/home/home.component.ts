import { Component, OnInit, ViewChild } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { data } from 'src/app/json/json';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('sede', { static: false }) sede: DropDownListComponent;
  @ViewChild('estudiantes', { static: false }) estudiantes: DropDownListComponent;

  public data: string[] = ['Kennedy', 'Suba', 'Chapinero'];

  public tipos: string[] = ['Bachillerato', 'Ingles', 'Técnico Desarrollo'];
  public datos: Object[] = [];

  constructor() { }

  ngOnInit() {

    this.datos = data;
  }

  buscar() {
    debugger
    if ((this.sede.text !== '' && this.sede.text !== null) && (this.estudiantes.text !== '' && this.estudiantes.text !== null )) {
      this.datos = _.filter(data,
        {
          sede: this.sede.text,
          tipoEstudio: this.estudiantes.text
        }
      );
    } else if ((this.sede.text !== '' && this.sede.text !== null) && (this.estudiantes.text === '' || this.estudiantes.text === null )) {
      this.datos = _.filter(data, { sede: this.sede.text });
    } else if ((this.sede.text === '' && this.sede.text == null) && (this.estudiantes.text !== '' && this.estudiantes.text !== null)) {
      this.datos = _.filter(data, { sede: this.estudiantes.text });
    }
  }

}
