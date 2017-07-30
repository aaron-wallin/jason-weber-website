import { Component, OnInit } from '@angular/core';
import { DataAccess } from '../services/dataaccess.service';

@Component({
  selector: 'app-gigs',
  templateUrl: './section.gigs.component.html',
  providers: [DataAccess]
})

export class SectionGigsComponent implements OnInit {
  public calendarEvents: any;

  constructor(private _dataaccess: DataAccess) { }

  public loadMore(): void {
    this._dataaccess.calendarLoadMore()
      .subscribe(
      r => {
        this.calendarEvents = r;
        this.filterResults();
      },
      e => console.log(e));
  }

  ngOnInit(): void {
    this._dataaccess.getCalendarData()
      .subscribe(
      r => {
        this.calendarEvents = r;
        this.filterResults();
      },
      e => console.log(e));
  }

  private filterResults() {
    this.calendarEvents = this.calendarEvents.filter(i => i.summary.toLowerCase() !== 'private party');
  }
}
