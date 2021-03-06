import { Component, OnInit } from '@angular/core';
import { DataAccess } from '../services/dataaccess.service';

@Component({
  selector: 'app-intro',
  templateUrl: './section.intro.component.html',
  providers: [DataAccess]
})

export class SectionIntroComponent implements OnInit {
  public calendarEvent: any = { summary: '', location: '', start: { datetime: '' } };
  public slideInfo: any[] = [];
  public albumInfo: any;

  constructor(private _dataAccess: DataAccess) { }

  ngOnInit(): void {
    this._dataAccess.getNextEvent()
      .subscribe(
      r => {
        //this.calendarEvent = r;
        this.filterResults(r);
      },
      e => console.log(e));

    this.albumInfo = this._dataAccess.getAlbumInfo();
  }

  private filterResults(events: any) {
    this.calendarEvent = events.filter(i => i.summary.toLowerCase() !== 'private party')[0];
  }
}
