import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  // activeEmitter = new EventEmitter<boolean>();
  activeEmitter = new Subject<boolean>();
}
