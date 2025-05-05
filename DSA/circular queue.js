// class CircularQueue {
//     constructor(size) {
//       this.queue = new Array(size);
//       this.size = size;
//       this.front = -1;
//       this.rear = -1;
//     }
  
//     enqueue(value) {
//       if ((this.rear + 1) % this.size === this.front) {
//         console.log("Queue is Full");
//         return;
//       } else if (this.front === -1) {
//         this.front = 0;
//         this.rear = 0;
//         this.queue[this.rear] = value;
//       } else {
//         this.rear = (this.rear + 1) % this.size;
//         this.queue[this.rear] = value;
//       }
//     }
  
//     dequeue() {
//       if (this.front === -1) {
//         console.log("Queue is Empty");
//         return;
//       }
  
//       const removedValue = this.queue[this.front];
//       if (this.front === this.rear) {
//         this.front = -1;
//         this.rear = -1;
//       } else {
//         this.front = (this.front + 1) % this.size;
//       }
//       console.log(`Removed: ${removedValue}`);
//     }
  
//     display() {
//       if (this.front === -1) {
//         console.log("Queue is Empty");
//         return;
//       }
  
//       let i = this.front;
//       let result = "";
//       while (true) {
//         result += this.queue[i] + " ";
//         if (i === this.rear) {
//           break;
//         }
//         i = (i + 1) % this.size;
//       }
//       console.log("Queue elements:", result.trim());
//     }
//   }
  
  
//   const cq = new CircularQueue(5);
  
//   cq.enqueue(10);
//   cq.enqueue(20);
//   cq.enqueue(30);
//   cq.enqueue(40);
//   cq.enqueue(50);
//   cq.display();   
  
//   cq.dequeue();  
//   cq.dequeue();   
//   cq.display();   
  
//   cq.enqueue(50);
//   cq.enqueue(60);
//   cq.display();   
  
//   cq.enqueue(70)
  