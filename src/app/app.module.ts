import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from "angular-datatables";
import {NgxEchartsModule} from "ngx-echarts";
import { ChartComponent } from './components/chart/chart.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { DegreesTableComponent } from './components/degrees-table/degrees-table.component';
import { ClassesTableComponent } from './components/classes-table/classes-table.component';
import { EditStudentPageComponent } from './pages/edit-student-page/edit-student-page.component';
import { EditDegreesPageComponent } from './pages/edit-degrees-page/edit-degrees-page.component';
import { EditClassesPageComponent } from './pages/edit-classes-page/edit-classes-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    StudentsTableComponent,
    DegreesTableComponent,
    ClassesTableComponent,
    PageNotFoundComponent,
    HomePageComponent,
    EditStudentPageComponent,
    EditDegreesPageComponent,
    EditClassesPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    DataTablesModule,
    NgxEchartsModule.forRoot({echarts: () => import('echarts'),}),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
