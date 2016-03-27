// Given a linked list, swap every two adjacent nodes and return its head.

// For example,
// Given 1->2->3->4, you should return the list as 2->1->4->3.

// Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(head === null || head.next === null){
        return head;
    }
    
    var temp = head.next;
    head.next = swapPairs(head.next.next);
    temp.next = head;
    
    return temp;
};

var swapPairs = function(head){
    var dummy = new ListNode(0);
    var current = dummy;
    dummy.next = head;
    
    while(current.next !== null && current.next.next !== null){
        var first = current.next;
        var second = current.next.next;
        first.next = second.next;
        current.next = second;
        current.next.next = first;
        current = current.next.next;
    }
    
    return dummy.next;
}