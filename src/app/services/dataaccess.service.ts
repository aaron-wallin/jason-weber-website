import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataAccess {
    currentDate = new Date();
    currentDateString: string;
    fiveDaysBackDate = new Date();
    fiveDaysBackDateString: string;
    fullResultCount = 25;
    // tslint:disable-next-line:max-line-length
    private _baseCalendarUrl = 'https://www.googleapis.com/calendar/v3/calendars/leoe8d9dl69kci867gbdvhid84@group.calendar.google.com/events?key=AIzaSyAG3XjK5qPcs1qzL0S9PPnfvx7IZxAA_ME';

    constructor(private _http: Http) {
        this.fiveDaysBackDate.setDate(this.fiveDaysBackDate.getDate() - 5);
        this.currentDateString = this.currentDate.toISOString();
        this.fiveDaysBackDateString = this.fiveDaysBackDate.toISOString();
    }

    calendarLoadMore(): any {
        this.fullResultCount += 10;
        return this.getCalendarData();
    }

    getCalendarData(): any {
        // tslint:disable-next-line:max-line-length
        return this._http.get(this._baseCalendarUrl + '&maxResults=' + this.fullResultCount + '&orderBy=startTime&singleEvents=true&timeMin=' + this.fiveDaysBackDateString)
            .map(res => res.json().items);
    }

    getNextEvent(): any {
        // tslint:disable-next-line:max-line-length
        return this._http.get(this._baseCalendarUrl + '&maxResults=1&orderBy=startTime&singleEvents=true&timeMin=' + this.currentDateString)
            .map(res => res.json().items[0]);
    }

    getAlbumInfo(): any {
        return [
            {
                imgUrl: 'assets/img/covers/originals/jw-album-11.jpg',
                cdBabyUrl: 'https://store.cdbaby.com/cd/jasonweber7',
                iTunesUrl: 'https://itunes.apple.com/us/artist/jason-weber/id5105199'
            },
            {
                imgUrl: 'assets/img/covers/originals/jw-album-10.jpg',
                cdBabyUrl: 'https://store.cdbaby.com/cd/jasonweber8',
                iTunesUrl: 'https://itunes.apple.com/us/artist/jason-weber/id5105199'
            },
            {
                imgUrl: 'assets/img/covers/originals/jw-album-9.jpg',
                cdBabyUrl: 'https://store.cdbaby.com/cd/jasonweber6',
                iTunesUrl: 'https://itunes.apple.com/us/artist/jason-weber/id5105199'
            },
            {
                imgUrl: 'assets/img/covers/originals/jw-album-8.jpg',
                cdBabyUrl: 'https://store.cdbaby.com/cd/jasonweber8',
                iTunesUrl: 'https://itunes.apple.com/us/artist/jason-weber/id5105199'
            },
            {
                imgUrl: 'assets/img/covers/originals/jw-album-7.jpg',
                cdBabyUrl: 'https://store.cdbaby.com/cd/jasonweber8',
                iTunesUrl: 'https://itunes.apple.com/us/artist/jason-weber/id5105199'
            },
            {
                imgUrl: 'assets/img/covers/originals/jw-album-6.jpg',
                cdBabyUrl: 'https://store.cdbaby.com/cd/jasonweber8',
                iTunesUrl: 'https://itunes.apple.com/us/artist/jason-weber/id5105199'
            },
            {
                imgUrl: 'assets/img/covers/originals/jw-album-5.jpg',
                cdBabyUrl: 'https://store.cdbaby.com/cd/jasonweber8',
                iTunesUrl: 'https://itunes.apple.com/us/artist/jason-weber/id5105199'
            },
            {
                imgUrl: 'assets/img/covers/originals/jw-album-4.jpg',
                cdBabyUrl: 'https://store.cdbaby.com/cd/jasonweber8',
                iTunesUrl: 'https://itunes.apple.com/us/artist/jason-weber/id5105199'
            },
            {
                imgUrl: 'assets/img/covers/originals/jw-album-3.jpg',
                cdBabyUrl: 'https://store.cdbaby.com/cd/jasonweber8',
                iTunesUrl: 'https://itunes.apple.com/us/artist/jason-weber/id5105199'
            },
            {
                imgUrl: 'assets/img/covers/originals/jw-album-2.jpg',
                cdBabyUrl: 'https://store.cdbaby.com/cd/jasonweber8',
                iTunesUrl: 'https://itunes.apple.com/us/artist/jason-weber/id5105199'
            },
            {
                imgUrl: 'assets/img/covers/originals/jw-album-1.jpg',
                cdBabyUrl: 'https://store.cdbaby.com/cd/jasonweber8',
                iTunesUrl: 'https://itunes.apple.com/us/artist/jason-weber/id5105199'
            },
        ];
    }
}