import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { SectionIntroComponent } from './sections/section.intro.component';
import { SectionAboutComponent } from './sections/section.about.component';
import { SectionBioComponent } from './sections/section.bio.component';
import { SectionGigsComponent } from './sections/section.gigs.component';
import { SectionBookingsComponent } from './sections/section.bookings.component';
import { SectionAlbumsComponent } from './sections/section.albums.component';


@NgModule({
  declarations: [
    AppComponent,
    SectionIntroComponent,
    SectionAboutComponent,
    SectionBioComponent,
    SectionGigsComponent,
    SectionBookingsComponent,
    SectionAlbumsComponent
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
