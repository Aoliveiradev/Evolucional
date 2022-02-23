import {Component, OnInit} from '@angular/core';
import {Degree} from "../../../shared/degree";
import {DegreesRepository} from "../../../shared/degrees-repository";

@Component({
  selector: 'app-degrees-table',
  templateUrl: './degrees-table.component.html',
  styleUrls: ['./degrees-table.component.css']
})
export class DegreesTableComponent implements OnInit {
  public degrees: Array<Degree> = [];

  constructor() { }

  ngOnInit(): void {
    new DegreesRepository().findAll().subscribe(degrees => {
      this.degrees = degrees;
    });
  }

}
