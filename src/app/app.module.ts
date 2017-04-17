import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { SectionIntroComponent } from './sections/section.intro.component';
import { SectionAboutComponent } from './sections/section.about.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionIntroComponent,
    SectionAboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
    ]
})
export class AppModule { }
