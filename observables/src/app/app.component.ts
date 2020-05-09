import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  activated = false;
  activeSub: Subscription;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activeSub = this.userService.activeEmitter.subscribe((data) => {
      this.activated = data;
    });
  }
  ngOnDestroy() {
    this.activeSub.unsubscribe();
  }
}
