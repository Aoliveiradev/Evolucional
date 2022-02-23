import {Component, OnInit} from '@angular/core';
import {Degree} from "../../shared/degree";
import {ClassesRepository} from "../../shared/classes-repository";

@Component({
  selector: 'app-classes-table',
  templateUrl: './classes-table.component.html',
  styleUrls: ['./classes-table.component.css']
})
export class ClassesTableComponent implements OnInit {
  public classes: Array<Degree> = [];

  constructor() { }

  ngOnInit(): void {
    new ClassesRepository().findAll().subscribe(classes => {4
      this.classes = classes;
    });
  }

}
