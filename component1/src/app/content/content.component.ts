import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ContentComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading') head: ElementRef;
  @ContentChild('paragraph') para: ElementRef;
  constructor() {
    console.log('constructor called !');
  }

  ngOnInit(): void {
    console.log('textContent ' + this.head.nativeElement.textContent);
    console.log('ngOnInit Called !');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
  ngDoCheck() {
    console.log('NgDoCheck Called !');
  }
  ngAfterContentInit() {
    console.log('Text Content ' + this.para.nativeElement.textContent);
    console.log('ngAfterContentInit Called !');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Called !');
  }
  ngAfterViewInit() {
    console.log('textContent ' + this.head.nativeElement.textContent);
    console.log('ngAfterViewInit Called !');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Called !');
  }
  ngOnDestroy() {
    console.log('ngDestroy Called!');
  }
}
