import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  @Input('appTimes') set render(numberOfTimes: number) {
    this.viewContainer.clear();

    for (let i = 0; i < numberOfTimes; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: i
      });
    }
  }
}
