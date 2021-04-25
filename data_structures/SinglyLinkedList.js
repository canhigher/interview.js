class Node {
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    error() {
        return false
    }
    push(value) {
        let node = new Node(value)
        if (!this.length) {
            this.head = node
            this.tail = node
        }
        else {
            this.tail.next = node
            this.tail = node
        }
        this.length++
        return this

    }
    size() {
        console.log(this.length)
    }
    print() {
        let current = this.head
        while(current != null) {
            console.log(current.data);
            current = current.next;
        }
    }
    pop() {
        if (!this.length) return this.error
        let current = this.head
        while (current.next.next != null) {
            current = current.next
        }
        let popped = current.next.data
        current.next = null
        this.tail = current
        this.length--;
        if (!this.head) {
            this.head = null;
            this.tail = null;
        }
        return popped
    }
    shift() {
        if(!this.length) return this.error
        let shifted = this.head.data
        this.head = this.head.next
        this.length--;
        if (!this.head) {
            this.head = null;
            this.tail = null;
        }
        return shifted
    }
    unshift(value) {
        if (!this.length) {
            this.push(value)
        }
        else {
            let node = new Node(value)
            node.next = this.head
            this.head = node
        }
        this.length++;
        return this
    }
    get(index) {
        if(!this.length) return this.error
        let counter = 1
        let current = this.head
        while (counter < index) {
            current = current.next
            counter++;
        }
        return current
    }
    set(index, value) {
        let node = this.get(index)
        node.data = value
        return node
    }
    insert(index, value) {
        if (index >= this.length) return this.push(value)
        else {
            let counter = 1
            let current = this.head
            while (counter < index) {
                current = current.next
                counter++;
            }
            let node = new Node(value)
            node.next = current.next
            current.next = node
            this.length++
        }
        return this
    }
    remove(value) {
        let current = this.head
        while (current.next && current.data.next != value ) {
            current = current.next
        }
        if (current.next.next == null) return this.error
        let removed = current.next.data
        current.next = current.next.next
        this.length--;
        return removed
    }
    reverse() {
        let current = this.head
        let prev = null
        let next = null;    
        this.head = this.tail
        this.tail = current
        while (current) {
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        // this.head = current
        return this
    }
}


var list = new SinglyLinkedList()
list.push(1)
// list.insert(2,8)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.print()
console.log("---")
list.reverse()
// let res = list.set(2,8)
// console.log(res);
list.print()