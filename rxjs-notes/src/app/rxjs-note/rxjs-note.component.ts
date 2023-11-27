import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  Observable,
  debounceTime,
  from,
  fromEvent,
  interval,
  of,
  take,
  takeLast,
  takeWhile,
} from 'rxjs';

@Component({
  selector: 'app-rxjs-note',
  templateUrl: './rxjs-note.component.html',
  styleUrls: ['./rxjs-note.component.css'],
})
export class RxjsNoteComponent implements OnInit, OnDestroy {
  @ViewChild('clickMe')
  clickMeButton: ElementRef | undefined;
  ngOnInit() {}
  ngOnDestroy() {}
  // Introcution to RxJs
  introductionToRxJs() {
    let userName$: Observable<string> | undefined;
    userName$ = new Observable((observer) => {
      try {
        observer.next('Hariom');
        observer.next('Aman');
        observer.next('Mohit');
        observer.next('Amit');
      } catch (err) {
        observer.error(err);
      }
    });
    userName$.subscribe((data) => {
      console.log(' |> ', data);
    });
  }
  // of operators
  ofOperatorFunction() {
    const userName$: Observable<string> = of('Hari');
    userName$.subscribe((data) => {
      console.log(' |> ', data);
    });
    const orderStatus$: Observable<string[]> = of([
      'order addded',
      'order placed',
      'order received',
      'order processed',
      'order submitted',
      'order delivered',
      'order completed',
    ]);
    orderStatus$.subscribe((data) => {
      console.log(' |> ', data);
    });
  }
  // from operator
  fromOperator() {
    const programmingLaunguage$: Observable<string> = from([
      'JavaScript',
      'Java',
      'Go Lang',
      'Python',
    ]);
    programmingLaunguage$.subscribe((data) => {
      console.log(' |> ', data);
    });
  }
  // fromEvent operator
  fromEventOperator() {
    const btnObservables$ = fromEvent(
      this.clickMeButton?.nativeElement,
      'click'
    );
    btnObservables$.subscribe((data) => {
      console.log(' |> ', data);
    });
  }
  // interval operator
  intervalOperator() {
    const number$ = interval(100);
    number$.subscribe((data) => {
      console.log(' |> ', data);
    });
  }
  // debounce Time operator
  debounceTimeOperator() {
    const number$ = interval(500);
    number$.pipe(debounceTime(100)).subscribe((data) => {
      console.log(' |> ', data);
    });
  }
  // take operator
  takeOperator() {
    const number$ = interval(500);
    number$.pipe(take(2), debounceTime(100)).subscribe((data) => {
      console.log(' |> ', data);
    });
  }
  // takeWhile operator
  takeWhileOperator() {
    const number$ = interval(500);
    number$
      .pipe(
        takeWhile((data) => {
          return data % 2 === 0 ? true : false;
        }),
        debounceTime(100)
      )
      .subscribe((data) => {
        console.log(' |> ', data);
      });
  }
  // takeLast operator
  takeLastOperator() {
    const number$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    number$.pipe(takeLast(2)).subscribe((data) => {
      console.log(' |> ', data);
    });
  }
}
