import { EventEmitter, Directive, ElementRef, Input, Output, NgModule } from '@angular/core';
import { fromEvent, merge } from 'rxjs';
import { delay, takeUntil, repeat } from 'rxjs/operators';

class LongClickDirective {
    constructor(hostElement) {
        this.hostElement = hostElement;
        this.clickDelayMs = 500;
        this.longClick = new EventEmitter();
    }
    ngAfterViewInit() {
        this.mouseDown$ = fromEvent(this.hostElement.nativeElement, 'mousedown');
        this.mouseUp$ = fromEvent(this.hostElement.nativeElement, 'mouseup');
        this.touchStart$ = fromEvent(this.hostElement.nativeElement, 'touchstart');
        this.touchEnd$ = fromEvent(this.hostElement.nativeElement, 'touchend');
        merge(this.mouseDown$, this.touchStart$).pipe(
        // tap(() => console.log('DOWN')),
        // tap((val) => console.log(val)),
        delay(this.clickDelayMs), takeUntil(merge(this.mouseUp$, this.touchEnd$)), repeat()).subscribe(val => this.longClick.emit(val));
    }
}
LongClickDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[longClick]'
            },] }
];
LongClickDirective.ctorParameters = () => [
    { type: ElementRef }
];
LongClickDirective.propDecorators = {
    clickDelayMs: [{ type: Input }],
    longClick: [{ type: Output, args: ['longClick',] }]
};

class NgxLongClickModule {
}
NgxLongClickModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LongClickDirective],
                imports: [],
                exports: [LongClickDirective]
            },] }
];

/*
 * Public API Surface of ngx-long-click
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LongClickDirective, NgxLongClickModule };
//# sourceMappingURL=ngx-long-click.js.map
