export class Stack {

    maxSize: number;
    items: Array<number>;
    top: number;

    constructor(size: number) {
        this.maxSize = size;
        this.items = new Array<number>(size);
        this.top = -1;
    }

    push(value: number) {
        this.items[++this.top] = value;
    }

    pop(): number {
        return this.items[this.top--];
    }

    peek(): number {
        return this.items[this.top];
    }

    isEmpty(): boolean {
        return this.top === -1;
    }

    isFull(): boolean {
        return this.top === this.maxSize - 1;
    }

}
