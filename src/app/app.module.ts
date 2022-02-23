import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from "angular-datatables";
import {NgxEchartsModule} from "ngx-echarts";
import { TableComponent } from './Component/table/table.component';
import { ChartComponent } from './Component/chart/chart.component';



@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ChartComponent,
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
