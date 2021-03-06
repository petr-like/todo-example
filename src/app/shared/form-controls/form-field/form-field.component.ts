import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent implements OnInit {

  @Input() label: string = '';
  @Input() required: boolean = false;
  @Input() control: AbstractControl | any;
  @Input() patternError: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  get hasError(): boolean {
    return this.control && this.control.invalid && this.control.touched;
  }

  get errorKey(): string | null {
    return this.control && this.control.errors && Object.keys(this.control.errors)[0];
  }

}
