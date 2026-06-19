import { Link } from "./link";

export class LinkedList {

    first?: Link;

    constructor() {
        this.first = undefined;
    }

    isEmpty(): boolean {
        return this.first === undefined;
    }

    insertFirst(data: number) {
        let newLink = new Link(data);
        newLink.next = this.first;
        this.first = newLink;
    }

    deleteFirst(): Link | undefined {
        if (this.first === undefined) {
            return undefined;
        }
        let temporary = this.first;
        this.first = this.first.next;
        return temporary;
    }

    displayList() {
        console.log("List (first -> last)");
        let current = this.first;
        while (current !== undefined) {
            current.display();
            current = current.next;
        }
        console.log("\n");
    }

}
