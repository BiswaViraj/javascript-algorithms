class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);

        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (val < current.val) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    find(val) {
        if (!this.root) return false;
        let current = this.root;
        let found = false;

        while (current && !found) {
            if (val < current.val) {
                current = current.left;
            } else if (val > current.val) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }

    BFS() {
        let node = this.root;
        (data = []), (queue = []);
        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            data.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return data;
    }

    DFSPreOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            data.push(node.val);

            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(current);

        return data;
    }

    DFSPostOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);

            data.push(node.val);
        }

        traverse(current);

        return data;
    }

    DFSInOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.val);
            if (node.right) traverse(node.right);
        }

        traverse(current);

        return data;
    }
}
