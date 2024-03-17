import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDateHighLighit]',
})
export class DateHighLighitDirective {
  @Input('appDateHighlight') date!: Date;

  constructor(private el: ElementRef) {
    this.highlightDate();
   }
   highlightDate() {
    console.log("cane to directive!!!!!!!!!!!!!")
    const currentDate = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(currentDate.getDate() + 7);

    if (this.date > currentDate && this.date <= nextWeek) {
      this.el.nativeElement.style.color = 'red';
    }
  }

}