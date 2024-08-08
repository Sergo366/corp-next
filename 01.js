
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
        return this
    }
    unshift(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }

        this.length++
        return this
    }
    shift(){
        if (!this.head) return undefined

        let temp = this.head
        this.head = this.head.next
        temp.next = null
        this.length--

        if (this.length === 0) {
            this.tail = null
        }

        return temp
    }
    get(index) {
        if (index < 0 || index >= this.length) return undefined

        let temp = this.head
        for (let i = 0; i < index; i++) {
            temp = temp.next
        }

        return temp
    }
    set(index, value) {
        let temp = this.get(index)
        if (!temp) return false

        temp.value = value
        return true
    }
    insert(index, value) {
        const newNode = new Node(value);
        if (index === 0 ) return this.unshift(newNode)
        if (index === this.length ) return this.push(newNode)
        if (index < 0 || index >= this.length) return false

        const temp = this.get(index - 1)
        newNode.next = temp.next
        temp.next = newNode
        this.length++

        return true
    }
    remove(index) {
        if (index === 0) return this.shift()
        if (index === this.length) return this.pop()
        if (index < 0 || index >= this.length) return undefined

        const before = this.get(index - 1)
        const temp = before.next

        before.next = temp.next
        temp.next = null
        this.length--
        return temp
    }
    reverse(){
        let temp = this.head
        this.head = this.tail
        this.tail = temp

        let next = temp.next
        let prev = null

        for (let i = 0; i < this.length; i++) {
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        }

        return this
    }
}

const list = new LinkedList(10)
list.push(11)
list.push(12)
list.push(13)