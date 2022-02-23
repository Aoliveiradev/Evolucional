import {Observable, of} from "rxjs";
import degrees from '../_files/degrees.json';
import {Degree} from "./degree";

export class DegreesRepository {
  private data: Array<Degree>;

  constructor() {
    this.data = degrees;
  }

  findAll(): Observable<Array<Degree>> {
     return of(degrees);
  }
}
