import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssComeFromFontComponent } from './css-come-from-font/css-come-from-font.component';
import { FontSizeUnitComponent } from './font-size-unit/font-size-unit.component';
import { IndexComponent } from './index/index.component';
import { JapaneseSyllabaryComponent } from './japanese-syllabary/japanese-syllabary.component';
import { JsonBeautifyComponent } from './json-beautify/json-beautify.component';
import { RgbValueConversionComponent } from './rgb-value-conversion/rgb-value-conversion.component';

const routes: Routes = [
	{ path: '', component: IndexComponent },
	{ path: 'json-beautify', component: JsonBeautifyComponent },
	{ path: 'css-come-from-font', component: CssComeFromFontComponent },
	{ path: 'font-size-unit', component: FontSizeUnitComponent },
	{ path: 'japanese-syllabary', component: JapaneseSyllabaryComponent },
	{ path: 'rgb-value-conversion', component: RgbValueConversionComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }