import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssComeFromFontComponent } from './css-come-from-font/css-come-from-font.component';
import { FontSizeUnitComponent } from './font-size-unit/font-size-unit.component';
import { IndexComponent } from './index/index.component';
import { JsonBeautifyComponent } from './json-beautify/json-beautify.component';

const routes: Routes = [
	{ path: '', component: IndexComponent },
	{ path: 'json-beautify', component: JsonBeautifyComponent },
	{ path: 'css-come-from-font', component: CssComeFromFontComponent },
	{ path: 'font-size-unit', component: FontSizeUnitComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }