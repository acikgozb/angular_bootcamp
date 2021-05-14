import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef) {}

  @Input('appClass') set classNames(classObj: any) {
    for (const classKey in classObj) {
     if (classObj[classKey]){
       this.element.nativeElement.classList.add(classKey);
     }else {
       this.element.nativeElement.classList.remove(classKey);
     }
    }
  }
}
