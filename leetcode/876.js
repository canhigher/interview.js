var middleNode = function(head) {
    let slower = faster = head;
    
    while (faster && faster.next) {
        faster=faster.next.next
        slower=slower.next
    }
    return slower
};