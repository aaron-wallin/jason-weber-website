import { Component, OnInit } from '@angular/core';
import { DataAccess } from '../services/dataaccess.service';

@Component({
  selector: 'app-albums',
  templateUrl: './section.albums.component.html',
  providers: [DataAccess]
})

export class SectionAlbumsComponent implements OnInit {  
  
  public albumList: any;

  constructor (private _dataAccess: DataAccess) {  }

  ngOnInit(): void {
    this.albumList = this._dataAccess.getAlbumInfo();
  }
}
