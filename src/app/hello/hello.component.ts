import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-hello',

  template: `
  <p>
  hello-world works inline!
  </p>
  `,

  // templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
