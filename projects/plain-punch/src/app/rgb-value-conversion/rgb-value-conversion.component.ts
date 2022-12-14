import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-rgb-value-conversion',
	templateUrl: './rgb-value-conversion.component.html',
	styleUrls: ['./rgb-value-conversion.component.scss']
})
export class RgbValueConversionComponent implements OnInit {

	constructor() { }

	@ViewChild('colorDisplay', { static: true })
	colorDisplay!: ElementRef<HTMLDivElement>

	hexRedValueString = ""
	hexGreenValueString = ""
	hexBlueValueString = ""

	convert(e: Event) {
		let colorValueInput = (e.target as HTMLInputElement)
		let rawPrimaryColorValue = colorValueInput.value ? parseInt(colorValueInput.value) : 0
		let primaryColorValue = rawPrimaryColorValue === NaN ? 0 : rawPrimaryColorValue

		let rawHexPrimaryColorValueString = primaryColorValue.toString(16)
		let hexPrimaryColorValueString = rawHexPrimaryColorValueString.length < 2 ? `0${rawHexPrimaryColorValueString}` : rawHexPrimaryColorValueString

		switch (colorValueInput.id) {
			case "redValueInput":
				this.hexRedValueString = hexPrimaryColorValueString;
				break;
			case "greenValueInput":
				this.hexGreenValueString = hexPrimaryColorValueString;
				break;
			case "blueValueInput":
				this.hexBlueValueString = hexPrimaryColorValueString;
				break;
		}
		let color = `#
			${this.hexRedValueString == "undefined" ? "00" : this.hexRedValueString}
			${this.hexGreenValueString == "undefined" ? "00" : this.hexGreenValueString}
			${this.hexBlueValueString == "undefined" ? "00" : this.hexBlueValueString}
			`
			.replace(/(\s+|\n|\r)+/g, "")
		console.log(color);

		this.colorDisplay.nativeElement.style.backgroundColor = color
	}

	ngOnInit(): void {
	}

}
