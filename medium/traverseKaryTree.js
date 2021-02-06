/* traverse a (K)ary tree using a breadth first search and a Depth first search
*/

class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    breadthFirstOrder(array=[]) {
        const queue = [this];
        while (!!queue.length) {
            const node = queue.shift();
            array.push(node.name);
            queue.push(...node.children)
        }
        return array;
    }

    depthFirstOrder(array=[]) {
        array.push(this.name)
        for (const child of this.children) {
            child.depthFirstOrder(array);
        }
        return array
    }

    depthFirstSearch(target) {
        const stack = [this];
        while (!!stack.length) {
            const node = stack.pop();
            if (node.name === target) return true;
            stack.push(...this.children)
        }
        return false
    }

    breadthFirstSearch(target) {
        const queue = [this];
        while (!!queue.length) {
            const node = queue.shift();
            if (node.name === target) return true;
            queue.push(...node.children)
        }
        return false;
    }
}

// Do not edit the line below.
exports.Node = Node;