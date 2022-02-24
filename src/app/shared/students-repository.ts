import {Observable, of} from "rxjs";
import students from "../../dados/students.json";
import degrees from "../../dados/degrees.json";
import classes from "../../dados/classes.json";
import {Student} from "./student";

export class StudentsRepository {
  private data: Array<Student>;

  constructor() {
    this.data = students.map((student: any) => {
      return {
        id: student.id,
        ra: student.ra,
        name: student.name,
        degree: degrees.find((degree: any) => {
          return degree.id == student.degreeId
        }),
        class: classes.classes.find((clazz: any) => {
          return clazz.id == student.classId
        })
      };
    });
  }

  findAll(): Observable<Array<Student>> {
    return of(this.data);
  }

  findById(id: any): Student | null {
    // return this.data.find(student => {
    //   return student.id == id;
    // });

    return null;
  }
}
