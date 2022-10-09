import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { CssComeFromFontComponent } from './css-come-from-font/css-come-from-font.component';
import { JsonBeautifyComponent } from './json-beautify/json-beautify.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { FontSizeUnitComponent } from './font-size-unit/font-size-unit.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
	{ path: '', component: IndexComponent },
	{ path: 'json-beautify', component: JsonBeautifyComponent },
	{ path: 'css-come-from-font', component: CssComeFromFontComponent },
	{ path: 'font-size-unit', component: FontSizeUnitComponent }
]

@NgModule({
	declarations: [
		AppComponent,
		JsonBeautifyComponent,
		CssComeFromFontComponent,
		HeaderComponent,
		FooterComponent,
		IndexComponent,
		FontSizeUnitComponent,
	],
	imports: [
		FormsModule,
		BrowserModule,
		RouterModule.forRoot(
			appRoutes,
			// { enableTracing: true }
		)
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
