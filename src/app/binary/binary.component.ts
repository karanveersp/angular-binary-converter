import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BinaryNumber } from './binary.model';


@Component({
  selector: 'app-binary',
  templateUrl: './binary.component.html',
  styleUrls: ['./binary.component.css']
})
export class BinaryComponent implements OnInit {
  binaryNumber: BinaryNumber;

  numberInput = new FormControl('', Validators.min(0));
  binaryInput = new FormControl('', Validators.pattern('^(1|0)+$'));


  constructor() { }

  ngOnInit() {
  }

  onNumberInput(): void {
    const n = parseInt(this.numberInput.value, 10);
    this.binaryNumber = BinaryNumber.fromNumber(n);
    // update binary input field
    this.binaryInput.setValue(this.getBinaryString());
  }

  onBinaryInput(): void {
    const s = this.binaryInput.value;
    this.binaryNumber = BinaryNumber.fromBinaryString(s);
    // update number input field
    this.numberInput.setValue(BinaryNumber.toDecimal(s));
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

  getBinaryString(): string {
    return this.binaryNumber.getBinaryString();
  }

  getBinaryToNumberExpression(): string {
    return this.binaryNumber.getBinaryToNumberExpression();
  }

}
