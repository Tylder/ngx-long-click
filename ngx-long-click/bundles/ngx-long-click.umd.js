(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ngx-long-click', ['exports', '@angular/core', 'rxjs', 'rxjs/operators'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-long-click'] = {}, global.ng.core, global.rxjs, global.rxjs.operators));
}(this, (function (exports, core, rxjs, operators) { 'use strict';

    var LongClickDirective = /** @class */ (function () {
        function LongClickDirective(hostElement) {
            this.hostElement = hostElement;
            this.clickDelayMs = 500;
            this.longClick = new core.EventEmitter();
        }
        LongClickDirective.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.mouseDown$ = rxjs.fromEvent(this.hostElement.nativeElement, 'mousedown');
            this.mouseUp$ = rxjs.fromEvent(this.hostElement.nativeElement, 'mouseup');
            this.touchStart$ = rxjs.fromEvent(this.hostElement.nativeElement, 'touchstart');
            this.touchEnd$ = rxjs.fromEvent(this.hostElement.nativeElement, 'touchend');
            rxjs.merge(this.mouseDown$, this.touchStart$).pipe(
            // tap(() => console.log('DOWN')),
            // tap((val) => console.log(val)),
            operators.delay(this.clickDelayMs), operators.takeUntil(rxjs.merge(this.mouseUp$, this.touchEnd$)), operators.repeat()).subscribe(function (val) { return _this.longClick.emit(val); });
        };
        return LongClickDirective;
    }());
    LongClickDirective.decorators = [
        { type: core.Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[longClick]'
                },] }
    ];
    LongClickDirective.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    LongClickDirective.propDecorators = {
        clickDelayMs: [{ type: core.Input }],
        longClick: [{ type: core.Output, args: ['longClick',] }]
    };

    var NgxLongClickModule = /** @class */ (function () {
        function NgxLongClickModule() {
        }
        return NgxLongClickModule;
    }());
    NgxLongClickModule.decorators = [
        { type: core.NgModule, args: [{
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

    exports.LongClickDirective = LongClickDirective;
    exports.NgxLongClickModule = NgxLongClickModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-long-click.umd.js.map
