/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummyHead = new ListNode(0)
    let curr = dummyHead
    while (list1 || list2){
        if (list1 && list2 &&list1.val < list2.val){
            curr.next = new ListNode(list1.val)
            curr = curr.next
            list1 = list1.next
        }
        else if (list1 && list2 && list1.val >= list2.val){
            curr.next = new ListNode(list2.val)
            curr = curr.next
            list2 = list2.next
        }
        else if (!list1){
            curr.next = list2
            break
        }
        else {
            curr.next = list1
            break
        }
    }
    return dummyHead.next
};