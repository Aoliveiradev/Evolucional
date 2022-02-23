import { Component, OnInit } from '@angular/core';
import {StudentsRepository} from "../../shared/students-repository";
import {Student} from "../../shared/student";

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit {
  public students: Array<Student> = [];

  constructor() { }

  ngOnInit(): void {
    new StudentsRepository().findAll().subscribe(students => {
      this.students = students;
    });''
  }

}
