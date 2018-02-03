import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'home',
  template: `
    <swiper>
      <div>
        Swiper slide content
      </div>
    </swiper>
  `
})
export class HomeComponent implements OnInit {
  public message: string;

  constructor() {}

  ngOnInit() {
    this.message = 'Hello';
  }
}