# Remove Duplicates from Sorted List 

# Given a sorted linked list, delete all duplicates such that each element appear only once.

# For example,
# Given 1->1->2, return 1->2.
# Given 1->1->2->3->3, return 1->2->3.


# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @return {ListNode}

def delete_duplicates(head)
    if head == nil || head.next == nil
        return head
    end
    current = head
    while current.next 
        if current.val == current.next.val
            current.next = current.next.next
        else
            current = current.next
        end
    end
    return head
end


# recursion solution:

def delete_duplicates(head)
    if head == nil || head.next == nil
        return head
    end
    
    current = head
    if current.val == current.next.val
        current.next = current.next.next
        delete_duplicates(current)
    else
        current = current.next
        delete_duplicates(current)
    end
    
    return head
end