/*
write a function to invert a Binary tree so that it's backwards
*/
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function invertBinaryTree(node) {
    if (!node) return null;
    let dummy = node.left;
    node.left = node.right;
    node.right = dummy;
    invertBinaryTree(node.left);
    invertBinaryTree(node.right);
}

let root = new BinaryTree(5);
root.right = new BinaryTree(7);
root.left = new BinaryTree(3);

console.log(invertBinaryTree(root))
console.log(root)
