import { Component, signal } from '@angular/core';

interface History {
  value: number;
  before: number;
  after: number;
}

@Component({
  selector: 'app-undoable-counter',
  imports: [],
  templateUrl: './undoable-counter.html',
  styleUrl: './undoable-counter.scss',
})
export class UndoableCounter {
  count = signal(0);
  history = signal<History[]>([]);
  // redo stack
  undoHistory = signal<History[]>([]);

  increment(number: number) {
    const before = this.count();
    const after = before + number;
    this.history.update((current) => [...current, { value: number, before, after }].slice(-50));
    this.count.set(after);
    this.undoHistory.set([]);
  }

  decrement(number: number) {
    const before = this.count();
    const after = before - number;
    this.history.update((current) => [...current, { value: -number, before, after }].slice(-50));
    this.count.set(after);
    this.undoHistory.set([]);
  }

  undo() {
    if (this.history().length === 0) return;
    const previous = this.history()[this.history().length - 1];
    this.count.set(previous.before);
    this.undoHistory.update((history) => {
      const updated = [...history, previous];
      return updated.slice(-50);
    });
    this.history.update((history) => history.slice(0, -1));
  }

  redo() {
    if (this.undoHistory().length === 0) return;
    const previous = this.undoHistory()[this.undoHistory().length - 1];
    this.count.set(previous.after);
    this.history.update((history) => {
      const updated = [...history, previous];
      return updated.slice(-50);
    });
    this.undoHistory.update((history) => history.slice(0, -1));
  }
}
