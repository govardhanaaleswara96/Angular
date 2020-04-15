import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vCaf.createEmbeddedView(this.templateRef);
    } else {
      this.vCaf.clear();
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private vCaf: ViewContainerRef
  ) {}
}
