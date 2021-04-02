import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { fromEvent, merge } from 'rxjs';
import { delay, repeat, takeUntil } from 'rxjs/operators';
export class LongClickDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9uZy1jbGljay5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbG9uZy1jbGljay9zcmMvbGliL2xvbmctY2xpY2suZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLE1BQU0sQ0FBQztBQUNsRCxPQUFPLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQU0sTUFBTSxnQkFBZ0IsQ0FBQztBQU03RCxNQUFNLE9BQU8sa0JBQWtCO0lBVzdCLFlBQW9CLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBVGxDLGlCQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ1AsY0FBUyxHQUFHLElBQUksWUFBWSxFQUEyQixDQUFDO0lBUS9CLENBQUM7SUFFL0MsZUFBZTtRQUNiLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRXZFLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJO1FBQzNDLGtDQUFrQztRQUNsQyxrQ0FBa0M7UUFDbEMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFDeEIsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUMvQyxNQUFNLEVBQUUsQ0FHVCxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7O1lBaENGLFNBQVMsU0FBQztnQkFDVCw4Q0FBOEM7Z0JBQzlDLFFBQVEsRUFBRSxhQUFhO2FBQ3hCOzs7WUFQaUMsVUFBVTs7OzJCQVV6QyxLQUFLO3dCQUNMLE1BQU0sU0FBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2Zyb21FdmVudCwgbWVyZ2UsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtkZWxheSwgcmVwZWF0LCB0YWtlVW50aWwsIHRhcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1tsb25nQ2xpY2tdJ1xufSlcbmV4cG9ydCBjbGFzcyBMb25nQ2xpY2tEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0e1xuXG4gIEBJbnB1dCgpIGNsaWNrRGVsYXlNcyA9IDUwMDtcbiAgQE91dHB1dCgnbG9uZ0NsaWNrJykgbG9uZ0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50IHwgVG91Y2hFdmVudD4oKTtcblxuICBtb3VzZURvd24kOiBPYnNlcnZhYmxlPGFueT47XG4gIG1vdXNlVXAkOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgdG91Y2hTdGFydCQ6IE9ic2VydmFibGU8YW55PjtcbiAgdG91Y2hFbmQkOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3N0RWxlbWVudDogRWxlbWVudFJlZikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5tb3VzZURvd24kID0gZnJvbUV2ZW50KHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ21vdXNlZG93bicpO1xuICAgIHRoaXMubW91c2VVcCQgPSBmcm9tRXZlbnQodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnbW91c2V1cCcpO1xuICAgIHRoaXMudG91Y2hTdGFydCQgPSBmcm9tRXZlbnQodGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAndG91Y2hzdGFydCcpO1xuICAgIHRoaXMudG91Y2hFbmQkID0gZnJvbUV2ZW50KHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3RvdWNoZW5kJyk7XG5cbiAgICBtZXJnZSh0aGlzLm1vdXNlRG93biQsIHRoaXMudG91Y2hTdGFydCQpLnBpcGUoXG4gICAgICAvLyB0YXAoKCkgPT4gY29uc29sZS5sb2coJ0RPV04nKSksXG4gICAgICAvLyB0YXAoKHZhbCkgPT4gY29uc29sZS5sb2codmFsKSksXG4gICAgICBkZWxheSh0aGlzLmNsaWNrRGVsYXlNcyksXG4gICAgICB0YWtlVW50aWwobWVyZ2UodGhpcy5tb3VzZVVwJCwgdGhpcy50b3VjaEVuZCQpKSxcbiAgICAgIHJlcGVhdCgpLFxuICAgICAgLy8gdGFwKCh2YWwpID0+IGNvbnNvbGUubG9nKHZhbCkpLFxuICAgICAgLy8gdGFwKCgpID0+IGNvbnNvbGUubG9nKCdsb25nIGNsaWNrJykpLFxuICAgICkuc3Vic2NyaWJlKHZhbCA9PiB0aGlzLmxvbmdDbGljay5lbWl0KHZhbCkpO1xuICB9XG5cbn1cbiJdfQ==