import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataAccess {
    currentDate = new Date();
    currentDateString: string;
    fiveDaysBackDate = new Date();
    fiveDaysBackDateString: string;

    constructor(private _http: Http) {
        this.fiveDaysBackDate.setDate(this.fiveDaysBackDate.getDate() - 5);

        this.currentDateString = this.currentDate.toISOString();
        this.fiveDaysBackDateString = this.fiveDaysBackDate.toISOString();
    }

    getCalendarData(): any {
        // tslint:disable-next-line:max-line-length
        return this._http.get('https://www.googleapis.com/calendar/v3/calendars/leoe8d9dl69kci867gbdvhid84@group.calendar.google.com/events?orderBy=startTime&singleEvents=true&timeMin=' + this.fiveDaysBackDateString + '&timeMax=2017-12-31T10:00:00-07:00&key=AIzaSyAG3XjK5qPcs1qzL0S9PPnfvx7IZxAA_ME')
                .map(res => res.json().items);
    }

    getNextEvent(): any {
        // tslint:disable-next-line:max-line-length
        return this._http.get('https://www.googleapis.com/calendar/v3/calendars/leoe8d9dl69kci867gbdvhid84@group.calendar.google.com/events?maxResults=1&orderBy=startTime&singleEvents=true&timeMin=' + this.currentDateString + '&timeMax=2017-12-31T10:00:00-07:00&key=AIzaSyAG3XjK5qPcs1qzL0S9PPnfvx7IZxAA_ME')
                .map(res => res.json().items[0]);
    }
}