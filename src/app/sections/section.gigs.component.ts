import { Component, OnInit } from '@angular/core';
import { DataAccess } from '../services/dataaccess.service';

@Component({
  selector: 'app-gigs',
  templateUrl: './section.gigs.component.html',
  providers: [DataAccess]
})

export class SectionGigsComponent implements OnInit {
  title = 'intro works!';
  public calendarEvents: any;

  constructor(private _dataaccess: DataAccess) {}

  ngOnInit(): void {
    this._dataaccess.getCalendarData()
        .subscribe(
          r => {
            console.log(r);
            this.calendarEvents = r;
          },
          e => console.log(e));
  }
}
