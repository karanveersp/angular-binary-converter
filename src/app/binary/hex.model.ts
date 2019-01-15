import { BinaryNumber } from './binary.model';
export class Hexadecimal {
  private hexNumber: string[];

  /**
   * Static factory method to create instance from binary string
   * @param binaryString String
   */
  public static fromBinary(binaryString: string): Hexadecimal {
    const n = BinaryNumber.toDecimal(binaryString);
    return new Hexadecimal(n);
  }

  /**
   * Static factory method to create instance from number
   * @param n number
   */
  public static fromDecimal(n: number): Hexadecimal {
    return n >= 0 ? new Hexadecimal(n) : null;
  }

  /**
   * Creates Hexadecimal object from number
   * @param n number
   */
  private constructor(n: number = 0) {
    this.hexNumber = [];
    this.initialize(n);
  }

  private initialize(n: number): void {
    if (n <= 0) {
      this.hexNumber.push('0');
    } else {
      while (n > 0) {
        let remainder = Math.floor(n % 16).toString(10);
        n = Math.floor(n / 16);
        switch (remainder) {
          case '10':
            remainder = 'A';
            break;
          case '11':
            remainder = 'B';
            break;
          case '12':
            remainder = 'C';
            break;
          case '13':
            remainder = 'D';
            break;
          case '14':
            remainder = 'E';
            break;
          case '15':
            remainder = 'F';
            break;
          default:
            break;
        }
        this.hexNumber.unshift(remainder);
      }
    }

  }

  // private initializeFromBinary(binary: string): void {
  //   binary = this.reverse(binary);
  //   const n = binary.length;
  //   const segmentsOf4: string[] = [];

  //   for (let i = 0; i < n; i += 4) {
  //     if (i + 4 < n) {
  //       const fourBits = binary.substr(i, i + 4);
  //       // have to reverse it to get the actual binary
  //       segmentsOf4.push(this.reverse(fourBits));
  //     } else {
  //       const someBits = binary.substr(i); // i to end
  //       segmentsOf4.push(this.reverse(someBits));
  //     }
  //   }

  //   for (const segment of segmentsOf4) {
  //     const decimalValue = BinaryNumber.toDecimal(segment);

  //     if (decimalValue >= 10) {
  //       // its a letter value
  //       switch (decimalValue) {
  //         case 10:
  //           this.hexNumber.unshift('A');
  //           break;
  //         case 11:
  //           this.hexNumber.unshift('B');
  //           break;
  //         case 12:
  //           this.hexNumber.unshift('C');
  //           break;
  //         case 13:
  //           this.hexNumber.unshift('D');
  //           break;
  //         case 14:
  //           this.hexNumber.unshift('E');
  //           break;
  //         case 15:
  //           this.hexNumber.unshift('F');
  //           break;
  //         default:
  //           break;
  //       }
  //     } else {
  //       this.hexNumber.unshift(decimalValue.toString(10));
  //     }
  //   }
  // }

  public getHexString(): string {
    return this.hexNumber.join('');
  }

  /**
   * Helper method that reverses a string
   * @param s String to reverse
   * @return reversed s
   */
  private reverse(s: string): string {
    return s.split('').reverse().join('');
  }
}
