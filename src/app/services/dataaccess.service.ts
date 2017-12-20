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
        return this._http.get(this._baseCalendarUrl + '&maxResults=10&orderBy=startTime&singleEvents=true&timeMin=' + this.currentDateString)
            .map(res => res.json().items);
    }

    getAlbumInfo(): any {
        return [
            {
                /* outsider */
                imgUrl: 'assets/img/covers/originals/jw-album-11.jpg',
                cdBabyUrl: 'https://store.cdbaby.com/cd/jasonweber7',
                iTunesUrl: 'https://itunes.apple.com/us/album/outsider/id1088121417?i=1088121419'
            },
            {
                /* christmas wish */
                imgUrl: 'assets/img/covers/originals/jw-album-10.jpg',
                cdBabyUrl: 'https://store.cdbaby.com/cd/jasonweber8',
                iTunesUrl: 'https://itunes.apple.com/us/album/deck-the-halls/id1170098871?i=1170098951'
            },
            {
                /* in too deep */
                imgUrl: 'assets/img/covers/originals/jw-album-9.jpg',
                cdBabyUrl: 'https://store.cdbaby.com/cd/jasonweber6',
                iTunesUrl: 'https://itunes.apple.com/us/album/can-u-feel-me-now/id739217002?i=739217453'
            },
            {
                /* reunion */
                imgUrl: 'assets/img/covers/originals/jw-album-8.jpg',
                cdBabyUrl: 'https://store.cdbaby.com/cd/deroseweber',
                iTunesUrl: 'https://itunes.apple.com/us/artist/jason-weber/id5105199'
            },
            {
                /* bringin' it */
                imgUrl: 'assets/img/covers/originals/jw-album-7.jpg',
                cdBabyUrl: 'https://store.cdbaby.com/cd/michaelrosatijasonweber',
                iTunesUrl: 'https://itunes.apple.com/us/artist/jason-weber/id5105199'
            },
            {
                /* five */
                imgUrl: 'assets/img/covers/originals/jw-album-6.jpg',
                cdBabyUrl: 'https://store.cdbaby.com/cd/jasonweber5',
                iTunesUrl: 'https://itunes.apple.com/us/album/you-gotta-be/id319963654?i=319964199'
            },
            {
                /* can u feel me now */
                imgUrl: 'assets/img/covers/originals/jw-album-5.jpg',
                cdBabyUrl: 'https://store.cdbaby.com/cd/jasonweber4',
                iTunesUrl: 'https://itunes.apple.com/us/album/just-another-urban-legend/id62976275?i=62976225'
            },
            {
                /* leap of faith */
                imgUrl: 'assets/img/covers/originals/jw-album-4.jpg',
                cdBabyUrl: 'https://store.cdbaby.com/cd/jasonweber3',
                iTunesUrl: 'https://itunes.apple.com/us/album/from-the-heart/id5105331?i=5105304'
            },
            {
                /* something blue */
                imgUrl: 'assets/img/covers/originals/jw-album-2.jpg',
                cdBabyUrl: 'https://store.cdbaby.com/cd/jasonweber',
                iTunesUrl: 'https://itunes.apple.com/us/album/rainforest/id5105226?i=5105222'
            },
            {
                /* 1st avenue */
                imgUrl: 'assets/img/covers/originals/jw-album-1.jpg',
                cdBabyUrl: 'https://store.cdbaby.com/cd/jasonweber2',
                iTunesUrl: 'https://itunes.apple.com/us/album/caribbean-sunset/id5105287?i=5105262'
            },
        ];
    }
}