import { Component, OnInit } from '@angular/core';
import {EChartsOption} from "echarts";
import students from '../../../dados/students.json';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public studentsList:{id:number, ra:number, name:string, degreeId:number, classId:number}[] = students;

  title = 'Evolucional-app';
  option: EChartsOption = {
    //colar codigo apartir daqui
    legend: {
      top: 'bottom'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [50, 150],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: [

  // {{ student.id }},
  // {{ student.ra }},
  // {{ student.name }},
  // {{ student.degree.name }},
  // {{ student.class.name }},


          { value: 4, name: 'Ensino Fundamental'},
          { value: 2, name: '1° ano do ensino médio' },
          { value: 3, name: '2° ano ensino médio' },
          { value: 1, name: '3° ano ensino médio' },
          { value: 1, name: 'Estudo em casa' },

        ]
      }
    ]
    //Finalizar codigo aqui

  }



  ngOnInit(): void {

  }
}

