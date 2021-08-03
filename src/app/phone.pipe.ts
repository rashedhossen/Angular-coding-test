// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'phone'
// })
// export class PhonePipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }
import { Pipe, PipeTransform } from '@angular/core';
import { parsePhoneNumber } from 'libphonenumber-js';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {
  transform(phoneValue: number | string): string {
    const stringPhone = phoneValue + '';
    const phoneNumber = parsePhoneNumber(stringPhone, 'US');
    const formatted = phoneNumber.formatNational();
    return formatted;
  }
}