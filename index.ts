export class FizzBuzzBatch {
    generated: Array<number> = [];

    generate(start=1, end=100): Array<number> {
        for (let i = start; i <= end; i += 1) {
            this.generated.push(i);
        }
        return this.generated;
    }

    process(data: Array<number> = this.generate()): Array<string | number> {
        return data.map(item => {
            if (item % 3 === 0 && item % 5 === 0) {
                return "fizzbuzz";
            } else if (item % 3 === 0) {
                return "fizz";
            } else if (item % 5 === 0) {
                return "buzz";
            } else {
                return item;
            }
        });
    }
}