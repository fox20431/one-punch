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
  }

}
