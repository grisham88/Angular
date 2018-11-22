import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { ParseError } from '@angular/compiler';

@Directive({
  selector: '[appAutoInputWidth]'
})
export class AutoInputWidthDirective {
  inputElement: HTMLInputElement;
  @Input()
  appAutoInputWidth;

  constructor(elementRef: ElementRef) {
    this.inputElement = elementRef.nativeElement;
  }

  @HostListener('focus')
  onFocus() {
    const width = this.inputElement.offsetWidth + Number.parseInt(this.appAutoInputWidth, 10);
    this.inputElement.style.width = `${width}px`;
    this.inputElement.select();
  }

  @HostListener('blur')
  lostFocus() {
    const width = this.inputElement.offsetWidth - Number.parseInt(this.appAutoInputWidth, 10);
    this.inputElement.style.width = `${width}px`;
  }
}
