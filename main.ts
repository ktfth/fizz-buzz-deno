import { FizzBuzzBatch } from './index.ts';

const fizzBuzz = new FizzBuzzBatch();

fizzBuzz.process().forEach(item => console.log(item));