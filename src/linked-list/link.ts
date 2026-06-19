export class Link {

    data: number;
    next: Link | undefined;

    constructor(data: number) {
        this.data = data;
        this.next = undefined;
    }

    display() {
        console.log(`Data: ${this.data}`);
    }
}
