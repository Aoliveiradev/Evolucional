import {Component, OnInit} from '@angular/core';
import {DegreesRepository} from "../../shared/degrees-repository";
import {Degree} from "../../shared/degree";
import {Router} from "@angular/router";

@Component({
  selector: 'app-degrees-table',
  templateUrl: './degrees-table.component.html',
  styleUrls: ['./degrees-table.component.css']
})
export class DegreesTableComponent implements OnInit {
  public degrees: Array<Degree> = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    new DegreesRepository().findAll().subscribe(degrees => {
      this.degrees = degrees;
    });
  }

  edit($event: Event, degree: Degree) {
    $event.preventDefault();

    this.router.navigate(['/degrees/', degree.id]);
  }
}
