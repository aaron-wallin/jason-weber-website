import { Component, OnInit } from '@angular/core';
import { DataAccess } from '../services/dataaccess.service';

@Component({
  selector: 'app-intro',
  templateUrl: './section.intro.component.html',
  providers: [DataAccess]
})

export class SectionIntroComponent implements OnInit {
  title = 'intro works!';
  public calendarEvent: any = {};
  public slideInfo: any[] = [];

  constructor(private _dataAccess: DataAccess){}

  ngOnInit(): void {
    this._dataAccess.getNextEvent()
        .subscribe(
          r => {
            this.calendarEvent = r;
          },
          e => console.log(e));
  }
}
