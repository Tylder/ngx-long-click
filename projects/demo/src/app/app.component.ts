import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  colors = ['#7FFFD4', '#ff693d', '#DEB887', '#008B8B', '#8FBC8F'];

  btn1ColorIndex = 0;
  btn2ColorIndex = 0;
  btn3ColorIndex = 0;

  onNormalClick(event): void {
    this.btn1ColorIndex += 1;

    console.log(event);

    if (this.btn1ColorIndex >= this.colors.length) { // cycle round
      this.btn1ColorIndex = 0;
    }
  }

  onLongClickReleaseBtn2(event): void {
    this.btn2ColorIndex += 1;

    console.log(event);

    if (this.btn2ColorIndex >= this.colors.length) { // cycle round
      this.btn2ColorIndex = 0;
    }
  }

  onLongClickReleaseBtn3(event): void {
    this.btn3ColorIndex += 1;

    console.log(event);

    if (this.btn3ColorIndex >= this.colors.length) { // cycle round
      this.btn3ColorIndex = 0;
    }
  }


}
