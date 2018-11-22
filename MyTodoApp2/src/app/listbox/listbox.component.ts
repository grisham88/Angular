import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listbox',
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.css']
})
export class ListboxComponent {
  @Input()
  items: string[] = [];

  // @Output()
  // itemsChanged = new EventEmitter();
  @Output()
  clearItemsClick = new EventEmitter();

  @Output()
  editItemClick = new EventEmitter<number>();
  @Output()
  removeItemClick = new EventEmitter<number>();

  editItem(index: number) {
    this.editItemClick.emit(index);
  }

  removeItem(index: number) {
    this.removeItemClick.emit(index);
  }

  clearItems() {
    this.clearItemsClick.emit();
  }
}
