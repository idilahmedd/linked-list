"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListNode_1 = __importDefault(require("./ListNode"));
class LinkedList {
    constructor(head = null, length = 0) {
        this.head = head;
        this.length = length;
    }
    add(data) {
        // create a new node with payload of data<U>
        let node = new ListNode_1.default(data);
        // start at this.head
        // if null => set head to new node
        if (this.head === null) {
            this.head = node;
        }
        else {
            // else call next unil current node.next = null
            //set current.next to new node
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
    }
    deleteAt(index) {
        //start at head
        if (this.head == null) {
            return null;
        }
        else if (index == 0) {
            let data = this.head.data;
            let oldHead = this.head;
            this.head = this.head.next;
            oldHead.next = null;
            oldHead.data = null;
            return data;
        }
        else {
            let current = this.head;
            let previous = current;
            let count = 0;
            while (count < index && current.next) {
                previous = current;
                current = current.next;
                count++;
            }
            if (index > count) {
                return null;
            }
            else {
                let data = current.data;
                previous.next = current.next;
                current.next = null;
                current.data = null;
                return data;
            }
        }
        //count until count == index
        //keep track of previous node, current node, next node if exists
        //link prev.next to next
        return null;
    }
    insertAt(index, data) {
        /// HOMEWORK
        if (index >= this.length) {
            this.add(data);
        }
        else {
            let node = new ListNode_1.default(data);
            let current = this.head;
            if (index <= 0) {
                node.next = current;
                this.head = node;
            }
            else {
                let currentIndex = 0;
                while (currentIndex < index - 1) {
                    current = current.next;
                    currentIndex++;
                }
                node.next = current.next;
                current.next = node;
            }
            this.length++;
        }
    }
    print() {
        //print console!
        if (this.head != null) {
            let arr = [];
            let current = this.head;
            while (current.next != null) {
                arr.push(current.data);
                current = current.next;
            }
            arr.push(current.data);
            console.log(arr);
        }
        else {
            console.log('empty list');
        }
    }
}
//TEST
let linky = new LinkedList();
linky.add('Hello, ');
linky.add('World!');
linky.add('Larlo');
linky.print();
linky.deleteAt(2);
linky.print();
linky.insertAt(2, 'FUNSTUFF');
linky.print();
linky.insertAt(3, 'DUNNO');
linky.print();
linky.insertAt(2, 'FUAD');
linky.print();
//# sourceMappingURL=LinkedList.js.map