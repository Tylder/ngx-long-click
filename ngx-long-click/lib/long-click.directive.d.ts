import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
export declare class LongClickDirective implements AfterViewInit {
    private hostElement;
    clickDelayMs: number;
    longClick: EventEmitter<MouseEvent | TouchEvent>;
    mouseDown$: Observable<any>;
    mouseUp$: Observable<any>;
    touchStart$: Observable<any>;
    touchEnd$: Observable<any>;
    constructor(hostElement: ElementRef);
    ngAfterViewInit(): void;
}
