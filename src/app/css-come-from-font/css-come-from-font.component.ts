import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-css-come-from-font',
  templateUrl: './css-come-from-font.component.html',
  styleUrls: ['./css-come-from-font.component.scss']
})
export class CssComeFromFontComponent implements OnInit {

  constructor() { }

	file?: File = undefined

	@ViewChild('fontFile')
	fontFile!: ElementRef<HTMLInputElement>

	@ViewChild('resultCss')
	resultCss!: ElementRef<HTMLTextAreaElement>

	onFileSelected = (event: Event) => {
		this.file = (event.target as HTMLInputElement).files![0]
	}

	convertToCssFromFontFile = (event: Event) => {
		let formData = new FormData()
		formData.append('file', this.file!)
		fetch('http://warrior.hihusky.com:8080/css-file', {
			method: 'POST',
			body: formData
		})
		.then( res => {
			return res.text();
		})
		.then ( res => {
			console.log(res);
			this.resultCss.nativeElement.innerHTML = res
		})
	}


  ngOnInit(): void {
  }

}
