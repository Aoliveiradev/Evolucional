import {Component, OnInit} from '@angular/core';
import {StudentsRepository} from "../../shared/students-repository";
import {Student} from "../../shared/student";
import {Router} from "@angular/router";

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit {
  public  students: Array<Student> = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    new StudentsRepository().findAll().subscribe(students => {
      this.students = students;
    });
  }

  edit($event: Event, student: Student) {
    $event.preventDefault();

    this.router.navigate(['/students/', student.id]);
  }
}
