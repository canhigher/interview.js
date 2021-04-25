var getIntersectionNode = function(headA, headB) {
    if(headA == null || headB == null) return null
    
    let a = headA;
    let b = headB;
    
    while (a != b) {
        if (a == null) {
            a = headB
        }
        else {
            a = a.next
        }
        
        if (b == null) {
            b = headA
        }
        else {
            b = b.next
        }
    }
    return a
};