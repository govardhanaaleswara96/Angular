import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  @Output() serverCreate = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintCreate = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('ServerContent') ServerContent: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  createServer(data: HTMLInputElement) {
    // console.log(data.value);
    this.serverCreate.emit({
      serverName: data.value,
      serverContent: this.ServerContent.nativeElement.value,
    });
  }
  createBlueprint(data: HTMLInputElement) {
    // console.log(this.ServerContent.nativeElement);
    this.blueprintCreate.emit({
      serverName: data.value,
      serverContent: this.ServerContent.nativeElement.value,
    });
  }
}
