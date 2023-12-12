import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject, BehaviorSubject, merge } from 'rxjs';
import { debounceTime, reduce, scan, startWith, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent {
  Form = new FormGroup({
    input1: new FormControl(0),
    input2: new FormControl(0),
  });

  merge$: Observable<number | null>;
  scan$: Observable<number>;
  reduce$: Observable<number>;

  endStream1$ = new Subject();
  endStream2$ = new Subject();

  constructor() {
    const input1$ = this.Form
      .get('input1')!
      .valueChanges.pipe(debounceTime(300), takeUntil(this.endStream1$));

    const input2$ = this.Form
      .get('input2')!
      .valueChanges.pipe(debounceTime(300), takeUntil(this.endStream2$));

    this.merge$ = merge(input1$, input2$);

    this.scan$ = this.merge$.pipe(scan((acc, val) => acc + (val ?? 0), 0));

    this.reduce$ = this.merge$.pipe(reduce((acc, val) => acc + (val ?? 0), 0));
  }

  terminate1() {
    this.endStream1$.next(null);
    this.endStream1$.complete();
  }

  terminate2() {
    this.endStream2$.next(null);
    this.endStream2$.complete();
  }
}