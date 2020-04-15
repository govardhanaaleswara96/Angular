import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  constructor() {}

  logStatusChanged(status: string) {
    console.log(' Service Changed Status ' + status);
  }
}
