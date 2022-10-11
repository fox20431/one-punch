import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CssComeFromFontComponent } from './css-come-from-font/css-come-from-font.component';
import { JsonBeautifyComponent } from './json-beautify/json-beautify.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { FontSizeUnitComponent } from './font-size-unit/font-size-unit.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { JapaneseSyllabaryComponent } from './japanese-syllabary/japanese-syllabary.component';

@NgModule({
	declarations: [
		AppComponent,
		JsonBeautifyComponent,
		CssComeFromFontComponent,
		HeaderComponent,
		FooterComponent,
		IndexComponent,
		FontSizeUnitComponent,
  JapaneseSyllabaryComponent,
	],
	imports: [
		FormsModule,
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
