import { Component, OnInit } from '@angular/core';
import students from '../../../_files/students.json';
import degrees from '../../../_files/degrees.json';
import teachers from '../../../_files/teachers.json';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{
  public studentsList:{id:number, ra:number, name:string, degreeId:number, classId:number}[] = students;
  public degreeList:{id:number, ra:number, name:string, degreeId:number, classId:number}[] = degrees;
  public teacherList:{id:number, ra:number, name:string, degreeId:number, classId:number}[] = teachers;

}
