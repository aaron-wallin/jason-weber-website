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

  ngOnInit(): void {
    this._dataaccess.getCalendarData()
      .subscribe(
      r => {
        this.calendarEvents = r;
      },
      e => console.log(e));
  }
}
