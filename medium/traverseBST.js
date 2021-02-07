/* 
return a sorted array of all the node values in the BST
*/
class TreeNode { 
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraverse(node, result=[]) {
    if (!!node) {
        inOrderTraverse(node.left, result);
        result.push(node.value);
        inOrderTraverse(node.right, result);
    }
    return result
}

let root = new TreeNode(5)
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(10);

console.log(inOrderTraverse(root)) // => [1, 2, 4, 5, 6, 7, 10]

