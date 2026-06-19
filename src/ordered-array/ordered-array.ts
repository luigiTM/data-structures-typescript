export class OrderedArray {

    items: Array<number>;
    count: number;

    constructor(size: number) {
        this.items = new Array<number>(size);
        this.count = 0;
    }

    insert(value: number) {
        let index: number;
        for (index = 0; index < this.count; index++) {
            if (this.items[index] > value) {
                break;
            }
        }
        for (let shiftIndex = this.count; shiftIndex > index; shiftIndex--) {
            this.items[shiftIndex] = this.items[shiftIndex - 1];
        }
        this.items[index] = value;
        this.count++;
    }

    find(value: number): number {
        let lowerBound = 0;
        let upperBound = this.count - 1;
        let index: number;
        while (true) {
            index = Math.round((lowerBound + upperBound) / 2);
            if (this.items[index] === value) {
                return index;
            } else if (lowerBound > upperBound) {
                return -1;
            } else {
                if (this.items[index] < value) {
                    lowerBound = index + 1;
                } else {
                    upperBound = index - 1;
                }
            }
        }
    }

    remove(value: number): boolean {
        let itemIndex = this.find(value);
        if (itemIndex === -1) {
            return false;
        }
        for (let index = itemIndex; index < this.count; index++) {
            this.items[index] = this.items[index + 1];
        }
        this.count--;
        return true;
    }

    display() {
        for (let index = 0; index < this.count; index++) {
            console.log(this.items[index]);
        }
    }

    size(): number {
        return this.count;
    }

}
