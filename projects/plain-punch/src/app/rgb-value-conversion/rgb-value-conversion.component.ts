import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-rgb-value-conversion',
	templateUrl: './rgb-value-conversion.component.html',
	styleUrls: ['./rgb-value-conversion.component.scss']
})
export class RgbValueConversionComponent implements OnInit {

	constructor() { }

	@ViewChild('redValueElement', { static: true })
	redValueElement!: ElementRef<HTMLInputElement>
	@ViewChild('greenValueElement', { static: true })
	greenValueElement!: ElementRef<HTMLInputElement>
	@ViewChild('blueValueElement', { static: true })
	blueValueElement!: ElementRef<HTMLInputElement>

	decimalRedValue?: string;
	decimalGreenValue?: string;
	decimalBlueValue?: string;

	hexRedValue?: string
	hexGreenValue?: string
	hexBlueValue?: string

	convert(e: Event) {
		// nullish coalescing: <A> ?? <B>
		this.hexRedValue = parseInt(this.decimalRedValue ?? "").toString(16)
		this.hexGreenValue = parseInt(this.decimalGreenValue ?? "").toString(16)
		this.hexBlueValue = parseInt(this.decimalBlueValue ?? "").toString(16)
		// this.hexGreenValue = this.hexBlueValue ?? parseInt(this.hexBlueValue).toString(16)
		// this.hexBlueValue = this.hexGreenValue ?? parseInt(this.hexGreenValue).toString(16)
	}

	ngOnInit(): void {
	}

}
