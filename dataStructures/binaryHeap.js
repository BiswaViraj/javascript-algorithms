class BinaryHeap {
    constructor() {
        this.val = [];
    }

    insert(element) {
        this.val.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.val.length - 1;
        const element = this.val[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.val[parentIndex];

            if (element > parent) break;
            this.val[parentIndex] = element;
            this.val[index] = parent;
            index = parentIndex;
        }
    }

    extractMAX() {
        const max = this.val[0];
        const end = this.val.pop();
        if (this.val.length > 0) {
            this.val[0] = end;
            this.bubbleDown();
        }
        return max;
    }

    bubbleDown() {
        let index = 0;
        const length = this.val.length;
        const element = this.val[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.val[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.val[rightChildIndex];
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;

            this.val[index] = this.val[swap];
            this.val[swap] = element;
            index = swap;
        }
    }
}
