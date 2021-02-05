/* 
return a sorted array of all the node values in the BST
*/
class BST { 
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraverse(tree, array) {
    const result = [];
    function traverse(node) {
        if (!!node.left) traverse(node.left);
        if (!!node) result.push(node.value);
        if (!!node.right) traverse(node.right);
    }
    traverse(tree)
    return result
}

let root = new BST(5)
root.left = new BST(2);
root.right = new BST(7)

console.log(inOrderTraverse(root)) // => [2, 5, 7]

