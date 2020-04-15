import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBasicBackground]',
})
export class BasicBackgroundDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
