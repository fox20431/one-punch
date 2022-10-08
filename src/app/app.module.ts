import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { CssComeFromFontComponent } from './css-come-from-font/css-come-from-font.component';
import { JsonBeautifyComponent } from './json-beautify/json-beautify.component';

const appRoutes: Routes = [
  { path: 'json-beautify', component: JsonBeautifyComponent },
  { path: 'css-come-from-font', component: CssComeFromFontComponent }
]

@NgModule({
  declarations: [
		JsonBeautifyComponent,
		CssComeFromFontComponent,
  ],
  imports: [
    BrowserModule,
		RouterModule.forRoot(
			appRoutes,
			{enableTracing: true}
		)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
