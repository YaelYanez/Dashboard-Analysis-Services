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
  @Output() getSelected: EventEmitter<string> = new EventEmitter();

  selectedItem: string;

  constructor() {}

  test = () => console.log('test');

  getSelectedItem = () => this.getSelected.emit(this.selectedItem);
}
