var getDecimalValue = function(head) {
    var current = head
    var total = 0;
    while (current) {
        total =  total << 1 | current.val
        current = current.next   
    }
    return total
};

