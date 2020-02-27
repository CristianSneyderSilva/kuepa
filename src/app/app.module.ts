/**
 * @author Cristian Silva
 * @description Archivo de confirguracion inicial del proyecto, listado de componentes
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// #seccion de componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
// #fin seccion de componentes

// Componentes sync
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { GridModule, PageService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { TableComponent } from './components/home/components/table/table.component';
import { FooterComponent } from './components/footer/footer.component';
// #Fin componentes sync

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TableComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DateRangePickerModule,
    DropDownListModule,
    GridModule
  ],
  providers: [PageService, ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
