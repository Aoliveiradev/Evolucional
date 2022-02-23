import {Class} from "./class";
import {Observable, of} from "rxjs";
import classes from '../_files/classes.json';

export class ClassesRepository {
  private data: Array<Class>;

  constructor() {
    this.data = classes.classes;
  }

  findAll(): Observable<Array<Class>> {
    return of(this.data);
  }
}
