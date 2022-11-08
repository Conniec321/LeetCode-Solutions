/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) return null
    let inverted = new TreeNode(root.val)
    let invertedRight = invertTree(root.right)
    let invertedLeft = invertTree(root.left)
    inverted.left = invertedRight
    inverted.right = invertedLeft
    
    return inverted
};