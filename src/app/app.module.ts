import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from "angular-datatables";
import {NgxEchartsModule} from "ngx-echarts";
import { TableComponent } from '../shared/components/table/table.component';
import { ChartComponent } from './components/chart/chart.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { DegreesTableComponent } from './components/degrees-table/degrees-table.component';
import { ClassesTableComponent } from './components/classes-table/classes-table.component';



@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ChartComponent,
    StudentsTableComponent,
    DegreesTableComponent,
    ClassesTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    DataTablesModule,
    NgxEchartsModule.forRoot({echarts: () => import('echarts'),}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
