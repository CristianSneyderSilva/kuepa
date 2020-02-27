/**
 * @author Cristian Silva
 * @description Listado de informacion general
 */

import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-grids';


@Component({
  selector: 'table-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {

  
  @Input() public datos: object[] = [];
  public data: object[];
  public pageSettings: PageSettingsModel;

  constructor() { }

  ngOnInit() {
    this.pageSettings = { pageSize: 6 };
    this.data =  this.datos;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.data = changes.datos.currentValue;
  }
}
