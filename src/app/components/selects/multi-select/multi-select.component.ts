import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
})
export class MultiSelectComponent {
  @Input() placeholder: string = '';
  @Input() multiple: boolean = false;
  @Input() clearable: boolean = false;
  @Input() closeOnSelect: boolean = true;
  @Input() isDisabled: boolean = false;
  @Input() items: object[];
  @Input() isLoading: boolean = false;
  @Input() selectedItems: string;
  @Input() customClass: string = 'WOOOOOOOOORKS';
  @Output() getSelected: EventEmitter<string> = new EventEmitter();
  @Output() getItemRemoved: EventEmitter<object> = new EventEmitter();
  @Output() getAddedItem: EventEmitter<string> = new EventEmitter();

  onChange = () => this.getSelected.emit(this.selectedItems);
  onRemove = (itemRemoved: object) => this.getItemRemoved.emit(itemRemoved);
  onAdded = (itemAdded: string) => this.getAddedItem.emit(itemAdded);
}
