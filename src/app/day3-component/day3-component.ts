import { Component, OnInit, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child-component/child-component';
import { FirstService } from '../Services/first-service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-day3-component',
  imports: [FormsModule, ChildComponent, RouterOutlet],
  templateUrl: './day3-component.html',
  styleUrl: './day3-component.scss',
})
export class Day3Component implements OnInit {
  count = signal(0);
  intval = -1;
  userInput = signal('hello');
  num = signal(10);
  fromChild = '';

  // Inject Service Instance
  private firstService = inject(FirstService);
  username = '';

  ngOnInit(): void {
    // this.intval = setInterval(()=>{
    //   // update
    //   this.count.update((val)=>{
    //     console.log(val);
    //     return ++val;
    //   })
    // }, 1000);

    // update on normal variables
    setTimeout(() => {
      // this.num = 0;
      this.num.set(0);
      console.log(this.num());
    }, 1000);
    console.log(this.firstService.users);
  }

  onClick() {
    // set
    this.count.set(0);
    clearInterval(this.intval);
  }

  handleChildEvent(str: string) {
    console.log('inParent, ' + str);
    this.fromChild = str;
  }

  addNewUser() {
    this.firstService.newUsers = { username: this.username };
  }
}
