/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    let visitedHash = new Map()
    let cloneNode = function (node) {
        if (node === null){
            return null
        }

        if (visitedHash.has(node)){
            return visitedHash.get(node)
        }

        let newNode = new Node(node.val, null, null)
        visitedHash.set(node, newNode)
      
        newNode.next = cloneNode(node.next)
        newNode.random = cloneNode(node.random)
        return newNode
    }
    return cloneNode(head)
    
};