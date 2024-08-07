
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length++
        return this
    }
    pop(){
        if (!this.head) return undefined

        let temp = this.head
        let prev = this.head
        while (temp.next) {
            prev = temp
            temp = temp.next
        }

        this.tail = prev
        this.tail.next = null
        this.length--

        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
    }
}

const list = new LinkedList(5)
list.push(12)