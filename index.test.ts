import {
  assertEquals,
} from "https://deno.land/std@0.155.0/testing/asserts.ts";
import {
    describe,
    it,
} from "https://deno.land/std@0.155.0/testing/bdd.ts";
import { FizzBuzzBatch } from "./index.ts";

describe('FizzBuzz problem', () => {
    const fizzBuzzBatch = new FizzBuzzBatch();
    
    it('should generate a sequence of numbers', () => {
        assertEquals(fizzBuzzBatch.generate(1, 1000), Array.from(Array(1000).keys()).map(item => item + 1));
    });

    it('should batch process a list of interchangable values of fizz, buzz and fizzbuzz or else', () => {
        const result = fizzBuzzBatch.process([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
        assertEquals(result, [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz']);
    });
});