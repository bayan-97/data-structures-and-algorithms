# Singly Linked List
 A data structure that contains nodes that links/points to the next node in the list.

## Challenge
1- Define a method called includes() which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
2- Define a method called toString() which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"
## Approach & Efficiency

### TEST 
-  instantiate an empty linked list

- insert into the linked list

- The head property will properly point to the first node in the linked list

-  insert multiple nodes into the linked list

- return true when finding a value within the linked list that exists

-  return false when searching for a value in the linked list that does not exist

- return a collection of all the values that exist in the linked list
## TEST B
-  add a node to the end of the linked list

-  add multiple nodes to the end of a linked list

-  insert a node before a node located i the middle of a linked list

-  insert a node before the first node of a linked list

-  insert after a node in the middle of the linked list

-  insert a node after the last node of the linked list
## TEST c

Linked List end method
    ✓ Where k is greater than the length of the linked list 
    ✓ Where k and the length of the list are the same 
    ✓  Where k is not a positive integer 
    ✓  Where the linked list is of a size 1 
    ✓ where k is not at the end, but somewhere in the middle of the linked list 
TEST (A)

![](/challanges/assets/Capturecode5test.PNG)

![](/challanges/assets/Capturecode5test2.PNG)

TEST (B)

![](/challanges/assets/listed-testboard.PNG)

TEST (c)
![](/challanges/assets/end3.PNG)
### results 
![](/challanges/assetsCapturetestresu.PNG)

![](/challanges/assets/Capturetestresu2.PNG)

## result(B)

![](/challanges/assets/listed-test2.PNG)
![](/challanges/assets/listed-test2.PNG)

## result(C)
![](/challanges/assets/end3.PNG)

## API
1-  **method**
**insert** to class
use condition 
if the head null
to assign to value
Direct or not
to assign to next propriety.

![](/challanges/assets/Capturecode52.PNG)

2-A-**method includes** to 
class in the first use condition to
examine if the head value 
equal value if not 
declare value have the 
head value 

B- enter to
loop while until 
find the if exist 
return true or 
value .next ==null 
out loop return false 

![](/challanges/assets/Capturecode5.PNG)

3-  method to **String**
**declare** the array variable
empty and push the first
value of head to it
enter loop first iteration
declare variable with
first value else to 
declare the variable 
add the another value
as string and when 
next equal null 
out and return the
value as the string.


![](/challanges/assets/Capturecode53.PNG)

4- `.append(value)` which added  a new node with the given value to the end of the list
![](/challanges/assets/append.PNG)



5.`insertBefore(value, newVal)` which we added  a new node with the given newValue immediately before the first value node

![](/challanges/assets/insert-after.PNG)


6.`insertAfter(value, newVal)` which add a new node with the given newValue immediately after the first value node

![](/challanges/assets/insert-before.PNG)


7. `end(k)`  method takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list.

# whitebord (A)

1- ![](/challanges/assets/Linked-list.PNG)

2- ![](/challanges/assets/Linked-list2.PNGPNG)

3- ![](/challanges/assets/Linked-list2.PNGPNG)


# whitebord (B)


1- ![](/challanges/assets/list-testwhit.PNG)

1- ![](/challanges/assets/list-testwhit1.PNG)

1- ![](/challanges/assets/list-testwhit2.PNG)


# whitebord (C)

1- ![](/challanges/assets/end1.PNG)

1- ![](/challanges/assets/end2.PNG)

1- ![](/challanges/assets/end3.PNG)

