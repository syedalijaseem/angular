import { Component, input, OnChanges, OnInit, output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-component',
  imports: [FormsModule],
  templateUrl: './child-component.html',
  styleUrl: './child-component.scss',
})
export class ChildComponent implements OnChanges{
  fromParent = input<string>();
  val = '';
  toParent = output<string>();

  onUserInput(){
    // console.log(this.val);
    this.toParent.emit(this.val);
  }
  ngOnChanges(changes: SimpleChanges): void {
    // Only triggers when input properties (NOT user input) changes
    console.log("child comp, On Changes")
  }

}
