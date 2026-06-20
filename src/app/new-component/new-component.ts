import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-new-component',
  imports: [CommonModule],
  templateUrl: './new-component.html',
  styleUrl: './new-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewComponent {
  dataList = [
    { id: 1, item: 'Book' },
    { id: 2, item: 'Bottle' },
    { id: 3, item: 'Desk' },
  ];
}
