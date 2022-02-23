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
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['id', 'ra', 'name', 'degreeId', 'classId'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '60%',
        data: [5, 5, 200, 334, 390, 330, 220]
      }
    ]
    //Finalizar codigo aqui

  }



  ngOnInit(): void {

  }
}

