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
 * @return {boolean}
 */
var isValidBST = function(root) {
  const validateTree = (node,min,max) => {
    if (!node){
        return true
    }
    if (node.val <=min || node.val >= max){
        return false
    }
    return validateTree(node.left,min,node.val) && validateTree(node.right,node.val,max)
  }
    return validateTree(root,-Infinity,Infinity)
};