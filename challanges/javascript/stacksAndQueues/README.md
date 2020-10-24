# Stacks and Queues
1. A stack is a data structure that consists of Nodes. Each Node references the next Node in the stack, but does not reference its previous.
2. Similar to a stack, a queue is a linear data structure. Unlike a stack, a queue deletes only the oldest added data.

## Challenge
1. Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
2. Create a Stack class that has a top property. It creates an empty Stack when instantiated.

3. Define a method called `push()` which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
4. Define a method called `pop()` that does not take any argument, removes the node from the top of the stack, and returns the node’s value.

5. Define a method called `peek()` that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.

6. Define a method called `isEmpty()` that takes no argument, and returns a boolean indicating whether or not the stack is empty.

1. Create a Queue class that has a front property. It creates an empty Queue when instantiated.

2. Define a method called `enqueue()` which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
3. Define a method called `dequeue()` that does not take any argument, removes the node from the front of the queue, and returns the node’s value.

4. Define a method called `peek()` that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.

5. Define a method called `isEmpty()` that takes no argument, and returns a boolean indicating whether or not the queue is empty.

## Approach & Efficiency

### TEST 
- Can successfully push onto a stack
- Can successfully push multiple values onto a stack
- Can successfully pop off the stack
- Can successfully empty a stack after multiple pops
- Can successfully peek the next item on the stack
- Can successfully instantiate an empty stack
- Calling pop or peek on empty stack raises exception
- Can successfully enqueue into a queue
- Can successfully enqueue multiple values into a queue
- Can successfully dequeue out of a queue the expected value
- Can successfully peek into a queue, seeing the expected value
- Can successfully empty a queue after multiple dequeues
- Can successfully instantiate an empty queue
- Calling dequeue or peek on empty queue raises exception
1- ![](/challanges/assets/chall10testcode.PNG)
1- ![](/challanges/assets/chall10testcode2.PNG)
1- ![](/challanges/assets/chall10testcode3.PNG)



### results 
1- ![](/challanges/assets/chall10res.PNG)



## API
**stack class**
1. Define a method called `push()` which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
2. Define a method called `pop()` that does not take any argument, removes the node from the top of the stack, and returns the node’s value.

3. Define a method called `peek()` that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.

4. Define a method called `isEmpty()` that takes no argument, and returns a boolean indicating whether or not the stack is empty.

**queue class**

1. Define a method called `enqueue()` which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
2. Define a method called `dequeue()` that does not take any argument, removes the node from the front of the queue, and returns the node’s value.

3. Define a method called `peek()` that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.

4. Define a method called `isEmpty()` that takes no argument, and returns a boolean indicating whether or not the queue is empty.


# whitebord 

1- ![](/challanges/assets/chall10white1.PNG)

1- ![](/challanges/assets/chall10white2.PNG)



