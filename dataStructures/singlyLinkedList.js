class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    // Adds Value to the end of the Linked List
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    // Removes and returns the last value(TAIL) in the list
    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = this.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return current;
    }
    // Removes and returns the first value(HEAD) in the list
    shift() {
        if (!this.head) return undefined;

        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }
    // Adds at the beginning of the list i.e Adds a new "Head"
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    // Returns the value at the index passed as parameter
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }

        return current;
    }
    // Modifies the value to the list at the given index
    set(val, index) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
    }
    // Inserts a new data to the list at the given index
    insert(val, index) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);

        const newNode = new Node(val);
        let previousNode = this.get(index - 1);

        newNode.next = previousNode.next;
        previousNode.next = newNode;
        this.length++;

        return true;
    }
    // Removes the node from the given index
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let previuosNode = this.get(index - 1);
        let removed = previuosNode.next;
        previuosNode.next = removed.next;
        this.length--;
        return removed;
    }
    //list in reverse order
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }

    // Prints the list
    printList() {
        let array = [];

        let currentNode = this.head;

        while (currentNode) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }
}
