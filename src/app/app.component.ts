import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <app-customers></app-customers>
  `
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
