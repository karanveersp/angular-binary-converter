
/**
 * This class models a binary number as a list of digits
 */
export class BinaryNumber {

  private constructor(n: number) {
    this.binaryNumberAsList = [];
    this.initialize(n);
  }

  private binaryNumberAsList: Array<number>;

  /**
   * Static method to create instance of BinaryNumber from number
   * @param n Number >= 0
   */
  public static fromNumber(n: number): BinaryNumber {
    if (n < 0) {
      return null;
    }
    return new BinaryNumber(n);
  }

  /**
   * Static method to create instance of BinaryNumber from string
   * @param binaryString String
   */
  public static fromBinaryString(binaryString: string): BinaryNumber {
    if (binaryString.match(/^(1|0)*$/)) {
      const n = BinaryNumber.toDecimal(binaryString);
      return new BinaryNumber(n);
    } else {
      return null;
    }
  }

  /**
   * This static method can be used to get the decimal value of a binary
   * @param binaryString String representation of binary number
   * @param binaryNumber BinaryNumber object (this model)
   */
  public static toDecimal(binaryString: string = '', binaryNumber: BinaryNumber = null ): number {
    if (binaryNumber !== null) {
      binaryString = binaryNumber.getBinaryString();
    }
    if (binaryString === null || binaryString === '') {
      return 0;
    }

    // reverse the binary string
    binaryString = binaryString.split('').reverse().join('');

    // convert binary string to int array
    const binaryArray = binaryString.split('').map(s => Number.parseInt(s, 10));

    let sum = 0;
    for (let i = 0; i < binaryArray.length; i++) {
      sum += binaryArray[i] * (Math.pow(2, i));
    }
    return sum;
  }

  private initialize(n: number): void {
    if (n === 0) {
      this.push(n);
    } else {
      while (n > 0) {
        const remainder = Math.floor(n % 2);
        n = Math.floor(n / 2);
        this.push(remainder);
      }
    }
  }

  private push(n: number): void {
    this.binaryNumberAsList.unshift(n);
  }

  /**
   * Getter for string value of binary number
   * @return binary number as string
   */
  public getBinaryString(): string {
    return this.binaryNumberAsList.map(d => d.toString()).join('');
  }

  /**
   * Returns the explicit expression
   * of how the decimal value is calculated from the binary number.
   * @return binary to decimal string expression
   */
  public getBinaryToNumberExpression(): string {
    const decimalValue = BinaryNumber.toDecimal(this.getBinaryString());

    // create array of [0, 1, 2...n] where n is the highest power of 2 in the binary number
    const powerOfTwo: number[] = [];
    for (let i = 0; i < this.binaryNumberAsList.length; i++) {
      powerOfTwo.push(i);
    }

    const binaryString = new Array<string>(powerOfTwo.length);
    let j = 0;
    for (let i = binaryString.length - 1; i >= 0; i--) {
      if (i === binaryString.length - 1) {
        binaryString[i] = `(${this.binaryNumberAsList[i]} &times; 2<sup>${powerOfTwo[j]}</sup>) = ${decimalValue}`;
      } else {
        binaryString[i] = `(${this.binaryNumberAsList[i]} &times; 2<sup>${powerOfTwo[j]}</sup>)`;
      }
      j++;
    }

    return binaryString.join(' + ');
  }


}
