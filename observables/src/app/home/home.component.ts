import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor() {}
  firstObservable: Subscription;
  ngOnInit() {
    // this.firstObservable = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    const customObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count Greater Than 3'));
        }
        count++;
      }, 1000);
    });

    this.firstObservable = customObservable
      .pipe(
        map((data: number) => {
          return 'round ' + (data + 1);
        })
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          console.log('completed');
        }
      );
  }
  ngOnDestroy() {
    this.firstObservable.unsubscribe();
  }
}
