# Ngx Long Click

Angular directive for detecting long clicks of an element in Angular 2 and up.

It is as simple as:

```html
<div longClick $event)"></div>
```

It internally uses `ResizeSensor` from [CSS Element Queries](https://github.com/marcj/css-element-queries).

## Playground

[StackBlitz playground](https://stackblitz.com/edit/angular-resize-event-playground?file=src/app/app.component.html)

## Using the library

Import the library in any Angular application by running:

```bash
$ npm install ngx-long-click
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Import the library module
import {NgxLongClickModule} from './ngx-long-click.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify NgxLongClickModule library as an import
    NgxLongClickModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

Once your library is imported, you can use its `longClick` directive in your Angular application:

```html
<div (longClick)="onLongClick($event)"></div>
```

```typescript
import { Component } from '@angular/core';

// Import the resized event model
import { ResizedEvent } from 'angular-resize-event';

@Component({...})
class MyComponent {
  width: number;
  height: number;

  onResized(event: ResizedEvent) {
    this.width = event.newWidth;
    this.height = event.newHeight;
  }
}
```

## License

MIT © [Daniel Lofgren](mailto:lofgrendaniel@hotmail.com)
