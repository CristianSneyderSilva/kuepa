/**
 * @author Cristian Silva
 * @description Pantala principal
 */

import { Component, OnInit, ViewChild } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { data } from 'src/app/json/json';
import * as _ from 'lodash';
import { DateRangePickerComponent } from '@syncfusion/ej2-angular-calendars';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('sede', { static: false }) sede: DropDownListComponent;
  @ViewChild('estudiantes', { static: false }) estudiantes: DropDownListComponent;
  @ViewChild('fechas', { static: false }) fechas: DateRangePickerComponent;

  public sedes: string[] = ['Kennedy', 'Suba', 'Chapinero'];

  public tipos: string[] = ['Bachillerato', 'Ingles', 'Técnico Desarrollo'];
  public datos: object[] = [];

  constructor() { }

  ngOnInit() {

    this.datos = data;
  }

  buscar() {
    const date = this.fechas.value as Date;
    let startDate = '';
    let finDate = '';
    if (!_.isNil(date)) {
      // Formato de fechas YYYY/mm/dd
      // Asignacion de meses
      const monthIni = date[0].getMonth() + 1;
      const monthFin = date[1].getMonth() + 1;
      const getDateIni = date[0].getDate().toString();
      const getDateFin = date[1].getDate().toString();
      const yearIni = date[0].getUTCFullYear().toString();
      const yearFin = date[1].getUTCFullYear().toString();

      startDate = yearIni + '-' + monthIni.toString() + '-' + getDateIni;
      finDate = yearFin + '-' + monthFin.toString() + '-' + getDateFin;

    }
    debugger
    // tslint:disable-next-line: max-line-length
    if ((this.sede.text !== '' && this.sede.text !== null) && (this.estudiantes.text !== '' && this.estudiantes.text !== null) && (this.fechas.value !== '' && this.fechas.value !== null)) {
      this.datos = _.filter(data, (item) => {
        debugger
        // tslint:disable-next-line: max-line-length
        const json = item.fecha >= startDate && item.fecha <= finDate && item.sede === this.sede.text && item.tipoEstudio === this.estudiantes.text;
        return json;
      });
    } else if ((this.sede.text !== '' && this.sede.text !== null) && (this.estudiantes.text !== '' && this.estudiantes.text !== null)) {
      this.datos = _.filter(data, (item) => {
        debugger
        // tslint:disable-next-line: max-line-length
        const json = item.sede === this.sede.text && item.tipoEstudio === this.estudiantes.text;
        return json;
      });
    } else if ((this.sede.text !== '' && this.sede.text !== null) && (this.fechas.value !== '' || this.fechas.value !== null)) {
      this.datos = _.filter(data, (item) => {
      const json = item.fecha >= startDate && item.fecha <= finDate && item.sede === this.sede.text;
      return json;
      });
    // tslint:disable-next-line: max-line-length
    } else if ((this.estudiantes.text !== '' && this.estudiantes.text !== null) && (this.fechas.value !== '' || this.fechas.value !== null)) {
      this.datos = _.filter(data, (item) => {
      const json = item.fecha >= startDate && item.fecha <= finDate && item.tipoEstudio === this.estudiantes.text;
      return json;
      });
    } else if ((this.sede.text !== '' && this.sede.text !== null) && (this.estudiantes.text === '' || this.estudiantes.text === null)) {
      this.datos = _.filter(data, { sede: this.sede.text });
    } else if ((this.sede.text === '' || this.sede.text == null) && (this.estudiantes.text !== '' && this.estudiantes.text !== null)) {
      this.datos = _.filter(data, { sede: this.estudiantes.text });
      // tslint:disable-next-line: max-line-length
    } else if ((this.estudiantes.text === '' || this.estudiantes.text === null) && (this.sede.text === '' || this.sede.text == null) && (this.fechas.value !== '' || this.fechas.value !== null)) {
      this.datos = _.filter(data, (item) => {
        const json = item.fecha >= startDate && item.fecha <= finDate;
        return json;
      });
    }
  }

}
