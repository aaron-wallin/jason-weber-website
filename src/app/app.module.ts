import './rxjs-extensions';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { SectionIntroComponent } from './sections/section.intro.component';
import { SectionAboutComponent } from './sections/section.about.component';
import { SectionBioComponent } from './sections/section.bio.component';
import { SectionGigsComponent } from './sections/section.gigs.component';
import { SectionBookingsComponent } from './sections/section.bookings.component';
import { SectionAlbumsComponent } from './sections/section.albums.component';
import { SectionEquipmentComponent } from './sections/section.equipment.component';
import { SectionContactComponent } from './sections/section.contact.component';
import { SectionAlbumItemComponent } from './sections/section.albums.album-item.component';


@NgModule({
  declarations: [
    AppComponent,
    SectionIntroComponent,
    SectionAboutComponent,
    SectionBioComponent,
    SectionGigsComponent,
    SectionBookingsComponent,
    SectionAlbumsComponent,
    SectionEquipmentComponent,
    SectionContactComponent,
    SectionAlbumItemComponent
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
