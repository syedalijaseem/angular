import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { FetchDataService } from '../day4-component/Service/fetch-data-service';
import { BehaviorSubject, fromEvent, Observable, ReplaySubject, Subject, Subscription } from 'rxjs';
import { ShareDataService } from './Service/share-data-service';

@Component({
  selector: 'app-day5-component',
  imports: [],
  templateUrl: './day5-component.html',
  styleUrl: './day5-component.scss',
})
export class Day5Component implements OnInit, AfterViewInit {
  private dataService = inject(ShareDataService);
  // multi cast
  // multiple subcribers can share the same data stream
  firstSub = new Subject();

  // Uni-cast
  myObs = new Observable<number>((subscriber) => {
    console.log('Start data stream');
    // start of the data stream
    subscriber.next(1);
    subscriber.next(2);
    subscriber.error('Error occurs');
    subscriber.next(3);
    subscriber.next(4);

    subscriber.complete();
  });

  // emits latest value in data stream
  secondSub = new BehaviorSubject(0);

  // replays entire datastream
  thirdSub = new ReplaySubject(3);

  sub: Subscription | null = null;

  ngOnInit(): void {
    this.sub = this.dataService.obs3.subscribe((res) => {
      console.log(res);
    });

    // this.dataService.obs1.subscribe((res) => {
    //   console.log(res);
    // });

    // this.dataService.obs2.subscribe((res) => {
    //   console.log(res);
    // });

    this.dataService.obs3.subscribe((res) => {
      console.log(res);
    });

    // this.dataService.myObs.subscribe((res) => {
    //   console.log('In Day5 Compnent', res);
    // });
    // this.firstSub.subscribe((val) => {
    //   console.log('subject one:', val);
    // });
    // this.firstSub.next(1);
    // this.firstSub.next(2);
    // this.firstSub.subscribe((val) => {
    //   console.log('subject two:', val);
    // });
    // this.firstSub.next(3);
    // indepent data stream
    // this.myObs.subscribe((res) => {
    //   console.log('Obs one: ', res);
    // });
    // this.myObs.subscribe((res) => {
    //   console.log('Obs two: ', res);
    // });
    // this.secondSub.subscribe((val) => {
    //   console.log('behavoir subject one:', val);
    // });
    // this.secondSub.next(1);
    // this.secondSub.next(2);
    // this.secondSub.subscribe((val) => {
    //   console.log('behavoir subject two:', val);
    // });
    // this.secondSub.next(3);
    // this.thirdSub.subscribe((val) => {
    //   console.log('replay subject one:', val);
    // });
    // this.thirdSub.next(1);
    // this.thirdSub.next(2);
    // this.thirdSub.next(3);
    // this.thirdSub.next(4);
    // this.thirdSub.subscribe((val) => {
    //   console.log('replay subject two:', val);
    // });
    // this.thirdSub.next(5);
  }

  ngAfterViewInit(): void {
    const btn = document.querySelector('.btn');
    if (btn) {
      fromEvent(btn, 'click').subscribe((res) => {
        console.log('From Event Observable', res);
        this.sub?.unsubscribe();
      });
    }
  }
}
