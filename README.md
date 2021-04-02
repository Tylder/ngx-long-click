# Ngx Long Click

Angular directive for detecting long clicks of an element in Angular 2 and up.

It is as simple as:

```html
<div (longClick)="onLongClick($event)></div>
```

## Demo

[Demo](https://tylder.github.io/ngx-long-click/)

or 

`npm run start` to run a local demo

## Using the library

Import the library in any Angular application by running:

```bash
$ npm install ngx-long-click --save
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Import the library module
import {NgxLongClickModule} from 'ngx-long-click';

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

`clickDelayMs` specifies the time in milliseconds the element need to be pressed before the event is fired 

```html
<div (longClick)="onLongClick($event)" clickDelayMs="1000">Press for 1 sec</div>
```

## License

MIT © [Daniel Lofgren](mailto:lofgrendaniel@hotmail.com)
