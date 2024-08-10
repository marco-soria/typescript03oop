import { Cat } from './09-protected';

// function getValue(value: unknown ) {
//   return value;
// }

// function getValue(value: string | number ) {
//   return value;
// }

function getValue<T>(value: T) {
  const array: T[] = [value];
  return value;
}

getValue<number>(12).toFixed();
getValue<string>('12').toLowerCase();
getValue<number[]>([11,1,1]).forEach;
const tiger = new Cat('tiger', 'marco');
getValue<Cat>(tiger).greeting
// Promise<boolean>
// axios.get<string[]>
