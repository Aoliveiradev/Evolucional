import {Degree} from "./degree";
import {Class} from "./class";

export interface Student {
  id: number,
  ra: number,
  name: string,
  degree: Degree
  class: Class
}
