import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAutoInputWidth]'
})
export class AutoInputWidthDirective {
  inputElement: HTMLInputElement;

  constructor(elementRef: ElementRef) {
    this.inputElement = elementRef.nativeElement;
  }

  @HostListener('focus')
  onFocus() {
    const width = this.inputElement.offsetWidth + 200;
    this.inputElement.style.width = `${width}px`;
    this.inputElement.select();
  }

  @HostListener('blur')
  lostFocus() {
    const width = this.inputElement.offsetWidth - 200;
    this.inputElement.style.width = `${width}px`;
  }
}
