/* 
given input are three instances of an ancestor tree. They have only an ancestor property
pointing at their younger. The first input is the youngest (top) ancestor whose ancestor
points to null and the other two inputs are random nodes in the tree

write a function that returns the youngest common ancestor of the two other inputs

ex1:
topAncestor: node A
descendant1: node E
descendand2: node I
output: node B

ex2:
topAncestor: node A
descendant1: node G
descendand2: node I
output: node A

tree:
        A
      /   \
     B     C
    / \   / \
   D   E F   G
  / \
 H   I

initial strategy: 
initialize a set. 
Iterate until the youngest from desc1 adding each node.name to the set
Iterate to the youngest from desc2 and once a node is found in the set, return that one
outcome: O(d) time and O(d) space where d is the depth of the tree

How can I optimize for space:
I can iterate from from both descendants to find their depths.
Once I have their depths, move the older one to the same depth as the younger one.
compare and see if they're the same, if not, move both to the next ancestor and 
compare again
outcome: O(d) time and O(1) space where d is the depth of the tree
*/

class AncestralTree {
    constructor(name) {
        this.name = name;
        this.ancestor = null;
    }
}

function getYoungestCommonAncestor(youngest, desc1, desc2) {
    if (desc2 === desc1) return desc2;

    let depthOne = getDepth(desc1, youngest);
    let depthTwo = getDepth(desc2, youngest);

    if (depthTwo !== depthOne) {
        levelTheNodes(desc1, depthOne, desc2, depthTwo);
    }

    if (desc2 !== desc1) {
        while(desc1 !== desc2) {
            desc2 = desc2.ancestor;
            desc1 = desc1.ancestor
        }
        return desc1;
    } else {
        return desc1;
    }
}

function getDepth(node, youngest) {
    let depth = 0;
    while (node !== youngest) {
        depth ++;
        node = node.ancestor;
    }
    return depth
}

function levelTheNodes(node1, d1, node2, d2) {
    if (d1 > d2) {
        while (d1 > d2) {
            node1 = node1.ancestor;
            d1 --;
        }
    } else {
        while (d2 > d1) {
            node2 = node2.ancestor;
            d2 --;
        }
    }
}