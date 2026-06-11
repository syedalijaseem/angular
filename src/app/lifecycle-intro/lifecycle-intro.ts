import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-intro',
  imports: [],
  templateUrl: './lifecycle-intro.html',
  styleUrl: './lifecycle-intro.scss',
})
export class LifecycleIntro implements OnInit, AfterContentInit, AfterViewInit, DoCheck, AfterContentChecked, AfterViewChecked, OnDestroy, OnChanges {
  /*
  1. Component created
  2. View rendered
  3. ChangeDetection: zone.js/zoneless
  4. Component destroyed
  */
  constructor() {
    console.log('constructor');
  }
  
  ngOnInit(): void {
    console.log('In OnInit');
  }
  ngAfterContentInit(): void {
    console.log('After Content Init');
  }
  ngAfterViewInit(): void {
    console.log('After View Init');
  }

  ngDoCheck(){
    console.log("do check")
  };

  ngAfterViewChecked(): void {
     console.log('After View Checked');
  }
  ngAfterContentChecked(): void {
     console.log('After Content Checked');
  }

  ngOnDestroy(): void {
    console.log("On Destroy");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("On changes");
  }
}
