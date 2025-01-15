/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let prev = new ListNode(0)
    let result = prev
    let temp1 = l1
    let temp2 = l2 
    let carry = 0
    while (temp1 || temp2 || carry){
        let temp1curr = temp1?.val ?? 0
        let temp2curr = temp2?.val ?? 0
        
        let sum = (temp1curr + temp2curr + carry) % 10
         carry = (temp1curr + temp2curr + carry) >= 10 ? 1 : 0
    
        result.next = new ListNode(sum)
        result = result.next
        temp1 = temp1?.next ?? null
        temp2 = temp2?.next ?? null
    }
        return prev.next
};