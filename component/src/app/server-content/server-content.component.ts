import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-content',
  templateUrl: './server-content.component.html',
  styleUrls: ['./server-content.component.css'],
})
export class ServerContentComponent implements OnInit {
  @Input('srvElement') element: { type: string; name: string; content: string };
  constructor() {}

  ngOnInit(): void {
    // console.log(this.element);
  }
}
