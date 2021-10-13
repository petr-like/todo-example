import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    }
  ]
})
export class CheckboxComponent implements ControlValueAccessor {

  @Input() title: string | undefined = '';
  @Output() changed = new EventEmitter<boolean>();

  value: boolean = false;
  isDisabled: boolean = false;

  private propagateChange: any = () => {};
  private propagateTouched: any = () => {};

  constructor() { }

  writeValue(value: boolean): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onChange(event: MatCheckboxChange): void {
    const value = event?.checked;

    this.value = value;
    this.propagateChange(value);
    this.changed.emit(value);
  }
}
