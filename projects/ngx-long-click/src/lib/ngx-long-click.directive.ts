import {AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output} from '@angular/core';
import {fromEvent, merge, Observable} from 'rxjs';
import {delay, repeat, takeUntil, tap} from 'rxjs/operators';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[longClick]'
})
export class NgxLongClickDirective implements AfterViewInit{

  @Input() clickDelayMs = 500; /* 0.5s default */
  @Output() longClick = new EventEmitter<MouseEvent | TouchEvent>();

  mouseDown$: Observable<any>;
  mouseUp$: Observable<any>;

  touchStart$: Observable<any>;
  touchEnd$: Observable<any>;

  constructor(private hostElement: ElementRef) {}

  ngAfterViewInit(): void {
    this.mouseDown$ = fromEvent(this.hostElement.nativeElement, 'mousedown');
    this.mouseUp$ = fromEvent(this.hostElement.nativeElement, 'mouseup');
    this.touchStart$ = fromEvent(this.hostElement.nativeElement, 'touchstart');
    this.touchEnd$ = fromEvent(this.hostElement.nativeElement, 'touchend');

    merge(this.mouseDown$, this.touchStart$).pipe(
      delay(this.clickDelayMs),
      takeUntil(merge(this.mouseUp$, this.touchEnd$)),
      repeat(),
    ).subscribe(val => this.longClick.emit(val));
  }

}
