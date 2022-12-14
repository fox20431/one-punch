import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }

	@ViewChild('ec', {static: true})
	ec!: ElementRef<HTMLDivElement>

  ngOnInit(): void {
		let chart = echarts.init(this.ec.nativeElement)
		let option: echarts.EChartsOption = {
			xAxis: {
				type: 'category',
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
			},
			yAxis: {
				type: 'value'
			},
			series: [
				{
					data: [820, 932, 901, 934, 1290, 1330, 1320],
					type: 'line',
					smooth: true
				}
			]
		};
		chart.setOption(option)
  }

}
