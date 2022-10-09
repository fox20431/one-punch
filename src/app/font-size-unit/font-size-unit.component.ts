import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-font-size-unit',
	templateUrl: './font-size-unit.component.html',
	styleUrls: ['./font-size-unit.component.scss']
})
export class FontSizeUnitComponent implements OnInit, AfterViewInit, AfterViewChecked {

	constructor() { }

	defaultFontSizeInPixel?: number

	// @ViewChild('referenceFont')
	// To make sure that it can be got before `ngAfterViewInit()`, please add `{ static: true }` in `@ViewChild()`.
	@ViewChild('referenceFont', { static: true })
	referenceFont!: ElementRef<HTMLSpanElement>;

	ngOnInit(): void {
		// target computed style
		let targetComputedStyle = getComputedStyle(this.referenceFont.nativeElement, undefined)
		let targetFontSize = targetComputedStyle.fontSize
		let targetFontSizeNumberInPixel = parseInt(targetFontSize)
		this.defaultFontSizeInPixel = targetFontSizeNumberInPixel
		console.log(this.referenceFont.nativeElement.style);
	}

	// Notes that: the variable can't be changed in&after the life funtion.
	ngAfterViewInit(): void {

	}

	ngAfterViewChecked(): void {
	}
}
