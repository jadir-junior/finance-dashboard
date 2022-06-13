import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'fin-bar-chart',
  template: `
    <div
      style="display: flex; justify-content: space-between; margin-bottom: 8px;"
    >
      <div class="title">Activity Graph</div>
      <div class="money">$186k</div>
    </div>
    <div style="display: flex; justify-content: flex-end;">
      <p class="sub-title">BETWEEN SEP 9 ~ 27</p>
    </div>
    <div style="display: block">
      <canvas
        baseChart
        #myChart
        [data]="barChartData"
        [options]="baseChartOptions"
      ></canvas>
    </div>
  `,
  styles: [
    `
      .title {
        font-size: 14px;
        color: #4c6072;
      }

      .money {
        font-size: 20px;
        color: #333;
        font-weight: 600;
        font-family: 'Tomorrow', sans-serif;
      }

      .sub-title {
        font-size: 12px;
        color: #aeaeae;
      }
    `,
  ],
})
export class BarChartComponent implements AfterViewInit {
  @ViewChild('myChart') public myChart!: ElementRef;
  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;

  public barChartData: ChartData<'bar'> = {
    labels: ['9', '11', '13', '15', '17', '19', '21', '23', '25', '27'],
    datasets: [
      {
        data: [500, 520, 480, 470, 600, 1000, 900, 1500, 600, 400],
        backgroundColor: ['#623CE7'],
        borderRadius: 16,
        hoverBackgroundColor: '#623CE7',
      },
    ],
  };

  public baseChartOptions: ChartOptions = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  ngAfterViewInit(): void {
    this.barChartData.datasets.forEach((d) => {
      d.backgroundColor = this.generateGradient();
    });

    this.chart.chart?.update();
  }

  generateGradient() {
    const gradient = this.myChart.nativeElement
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 150);
    gradient.addColorStop(0, '#623CE7');
    gradient.addColorStop(1, '#9C3CE7');
    return gradient;
  }
}
