import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-font-size-unit',
	templateUrl: './font-size-unit.component.html',
	styleUrls: ['./font-size-unit.component.scss']
})
export class FontSizeUnitComponent implements OnInit, AfterViewInit, AfterViewChecked {

	constructor() { }

	defaultFontSizeInPixel: number = 0
	targetFontSizeInPixel?: number
	fontSizeInEm: number = 0

	calcEm = () => {
		console.log(this.targetFontSizeInPixel);
		if (this.targetFontSizeInPixel) {
			this.fontSizeInEm = this.targetFontSizeInPixel / this.defaultFontSizeInPixel
		} else {
			alert("请输入目标字体大小！")
		}
	}

	// @ViewChild('referenceFont')
	// To make sure that it can be got before `ngAfterViewInit()`, please add `{ static: true }` in `@ViewChild()`.
	@ViewChild('referenceFont', { static: true })
	referenceFont!: ElementRef<HTMLSpanElement>;

	ngOnInit(): void {
		let targetComputedStyle = getComputedStyle(this.referenceFont.nativeElement, undefined)
		let targetFontSize = targetComputedStyle.fontSize
		let targetFontSizeInPixel = parseInt(targetFontSize)
		this.defaultFontSizeInPixel = targetFontSizeInPixel
	}

	// Notes that: the variable can't be changed in&after the life funtion.
	ngAfterViewInit(): void {

	}

	ngAfterViewChecked(): void {
	}
}
