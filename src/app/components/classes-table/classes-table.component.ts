import {Component, OnInit} from '@angular/core';
import {ClassesRepository} from "../../shared/classes-repository";
import {Class} from "../../shared/class";
import {Router} from "@angular/router";


@Component({
  selector: 'app-classes-table',
  templateUrl: './classes-table.component.html',
  styleUrls: ['./classes-table.component.css']
})
export class ClassesTableComponent implements OnInit {
  public classes: Array<Class> = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    new ClassesRepository().findAll().subscribe(classes => {
      this.classes = classes;
    });
  }
  edit($event: Event, classes: Class) {
    $event.preventDefault();

    this.router.navigate(['/classes/', classes.id]);
  }

}
