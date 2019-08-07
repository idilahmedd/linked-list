import ListNode from './ListNode';

class LinkedList<U> {
   constructor(
      private head = null as ListNode<U>,
      public length: number = 0
   ) { }

   add(data: U): void {
      // create a new node with payload of data<U>
      let node = new ListNode<U>(data)
      // start at this.head
      // if null => set head to new node
      if (this.head === null) {
         this.head = node;
      } else {
         // else call next unil current node.next = null
         //set current.next to new node
         let current = this.head
         while (current.next != null) {
            current = current.next
         }
         current.next = node;
      }

   }
   deleteAt(index: number): U {
      //start at head
      if (this.head == null) {
         return null as U
      } else if (index == 0) {
         let data = this.head.data
         let oldHead = this.head
         this.head = this.head.next
         oldHead.next = null
         oldHead.data = null
         return data
      } else {
         let current = this.head
         let previous = current;
         let count = 0
         while (count < index && current.next) {
            previous = current
            current = current.next
            count++
         }
         if (index > count) {
            return null as U
         } else {
            let data = current.data
            previous.next = current.next
            current.next = null
            current.data = null
            return data
         }
      }
      //count until count == index
      //keep track of previous node, current node, next node if exists
      //link prev.next to next
      return null as U
   }
   insertAt(index: number, data: U): void {
      /// HOMEWORK
      if (index > this.length) {
         this.add(data)
      } else {
         let node = new ListNode<U>(data)
         let current = this.head
         if (index <= 0) {
            node.next = current
            this.head = node
         } else {
            let currentIndex = 0;
            while (currentIndex < index - 1) {
               current = current.next
               currentIndex++
            }
            node.next = current.next
            current.next = node
         }
         this.length++
      }
   }

   print(): void {
      //print console!
      if (this.head != null) {
         let arr: any[] = []
         let current = this.head;
         while (current.next != null) {
            arr.push(current.data)
            current = current.next
         }
         arr.push(current.data)
         console.log(arr)
      } else {
         console.log('empty list')
      }
   }
}
//TEST
let linky = new LinkedList<string>()
linky.add('Hello, ');
linky.add('World!');
linky.add('Larlo');

linky.print();
linky.deleteAt(2);
linky.print();
linky.insertAt(2, 'FUNSTUFF')
linky.print();
linky.insertAt(3, 'DUNNO')
linky.print();
linky.insertAt(2, 'FUAD')
linky.print();