var hasCycle = function(head) {
    if (head == null) {
        return false;
    }
    let faster = head.next
    let slower = head
    
    while(faster != slower) {
        if (faster == null || faster.next == null) {
            return false
        }
        faster = faster.next.next
        slower = slower.next
        }
    return true
};