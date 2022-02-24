import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {StudentsRepository} from "../../shared/students-repository";

@Component({
  selector: 'app-edit-student-page',
  templateUrl: './edit-student-page.component.html',
  styleUrls: ['./edit-student-page.component.css']
})

export class EditStudentPageComponent implements OnInit {
  private studentsRepository: StudentsRepository;

  constructor(private activeRoute: ActivatedRoute) {
    this.studentsRepository = new StudentsRepository();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {

    });
  }

}
