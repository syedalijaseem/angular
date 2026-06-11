import { Component, inject, signal, effect, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FirstService } from '../Services/first-service';

@Component({
  selector: 'app-first-component',
  imports: [FormsModule],
  templateUrl: './first-component.html',
  styleUrl: './first-component.scss',
})
export class FirstComponent{
  data = 'Miranda';
  disable = false;

  userInput = "Initial Input";

  // Inject service
  private fristService = inject(FirstService);
  // users = signal<any[]>([]);
  // computed create read-only signals based on other singal values;
  users = computed(()=>{
    return this.fristService.users();
  })

  constructor(){
    // Injection context
    // effect(()=>{
    //   this.users = this.fristService.users;
    //   console.log(this.fristService.users());
    // })
  }
  

  onClick() {
    this.data = 'Tom';
    this.disable = true;
  }
}
