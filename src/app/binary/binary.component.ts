import { Component, OnInit, HostBinding, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { BinaryNumber } from './binary.model';
import { Hexadecimal } from './hex.model';

@Component({
  selector: 'app-binary',
  templateUrl: './binary.component.html',
  styleUrls: ['./binary.component.css']
})
export class BinaryComponent implements OnInit {
  // Theming properties
  @HostBinding('class.dark-theme') darkTheme = false;
  @HostBinding('class.light-theme') lightTheme = true;
  @Output() enableDarkTheme = new EventEmitter<boolean>();
  theme = 'light-theme';
  btnText = 'Dark Theme';


  binaryNumber: BinaryNumber;
  hexNumber: Hexadecimal;

  numberInput = new FormControl('', Validators.min(0));
  binaryInput = new FormControl('', Validators.pattern('^(1|0)+$'));
  hexInput = new FormControl('', Validators.pattern(/^([0-9]|[A-F])+$/));

  constructor() { }

  ngOnInit() {
  }

  onThemeChange() {
    if (this.theme === 'light-theme') {
      this.lightTheme = false;
      this.darkTheme = true;
      this.theme = 'dark-theme';
      this.btnText = 'Light Theme';
      this.enableDarkTheme.emit(true);
    } else {
      this.lightTheme = true;
      this.darkTheme = false;
      this.theme = 'light-theme';
      this.btnText = 'Dark Theme';
      this.enableDarkTheme.emit(false);
    }
  }

  onNumberInput(): void {
    const n = parseInt(this.numberInput.value, 10);
    this.binaryNumber = BinaryNumber.fromNumber(n);
    // update binary input field
    this.binaryInput.setValue(this.getBinaryString());

    // update hex number and input field
    this.hexNumber = Hexadecimal.fromDecimal(n);
    this.hexInput.setValue(this.getHexString());
  }

  onBinaryInput(): void {
    const s = this.binaryInput.value;
    this.binaryNumber = BinaryNumber.fromBinaryString(s);
    // update number input field
    this.numberInput.setValue(BinaryNumber.toDecimal(s));
    // update hex number and input field
    this.hexNumber = Hexadecimal.fromBinary(s);
    this.hexInput.setValue(this.getHexString());
  }

  onHexInput(): void {
    // TODO: Implement hex to binary function
    // const s = this.hexInput.value;
    // this.binaryNumber = BinaryNumber.fromBinaryString(s);
    // // update number input field
    // this.numberInput.setValue(BinaryNumber.toDecimal(s));
  }

  getErrorMessage(): string {
    if (this.numberInput.hasError('min')) {
      return 'Minimum value: 0';
    }
  }

  getBinaryErrorMessage(): string {
    if (this.binaryInput.hasError('pattern')) {
      return 'Invalid binary';
    }
  }

  getHexErrorMessage(): string {
    if (this.hexInput.hasError('pattern')) {
      return 'Invalid hexadecimal';
    }
  }

  getBinaryString(): string {
    return this.binaryNumber ? this.binaryNumber.getBinaryString() : '';
  }

  getHexString(): string {
    return this.hexNumber ? this.hexNumber.getHexString() : '';
  }

  getBinaryToNumberExpression(): string {
    return this.binaryNumber ? this.binaryNumber.getBinaryToNumberExpression() : '';
  }

}
