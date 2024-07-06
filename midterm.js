// Question1: Find the missing number in a unsorted
// array whose value is upto n
// Time Complexity: O(n)

const findMissingNumber = (arr, n) => {
    const lastNum = n;
    let len = arr.length;
    let sum = 0;
    let sum2 = 0;

    for (let i = 0; i < len; i++) {
        sum += arr[i];
    }
    for (let i = 1; i <= lastNum; i++) {
        sum2 += i;
    }

    return sum2 - sum;
}


// Different approaches to find the missing number in an array

function findMissingNumber2(array,n){
    let expectedSum = n*(n+1)/2;
    let actualSum = array.reduce((acc, cur)=> acc +cur ,0);
    return expectedSum-actualSum;
}


let array = [5, 4, 1, 2];
let array2 = [9, 5, 3, 2, 6, 1, 7, 8, 10];
let array3 = [2, 3, 1, 5];
let array4 = [1, 2, 3, 4, 5];

console.log(findMissingNumber(array, 5)); // 3
console.log(findMissingNumber(array2, 10)); // 4
console.log(findMissingNumber2(array3, 5)); // 4
console.log(findMissingNumber2(array4, 6)); // 6


// Question2: Given an array of integers nums and an
// integer target, return the indices of the two
// numbers such that they add up to the target.
// Time Complexity: O(nlog n)
const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [i, j];
}


let array5 = [1, 5, 2, 7];
let array6 = [20, 1, 5, 2, 11];
let array7 = [3, 2, 4];

console.log(twoSum(array5, 8)) // [0, 3]
console.log(twoSum(array6, 3)) // [1, 3]
console.log(twoSum(array7, 6)) // [1, 2]

console.log("==================================")


// Question4: Given a linked list, determine if it has
// a cycle in it. If it has a cycle return true otherwise
// return false.
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


const checkIfCycleExists = (head) => {
    if (!head || !head.next) {
        return false;
    }

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            slow = head;

            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return true;
        }
    }
    return false;

}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    append(data){
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
        return this;
    }
}

const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(null);

console.log(checkIfCycleExists(linkedList.head)) // false



console.log("==================================")


// Question5: Given a string containing just the
// characters '(', ')', '{', '}', '[' and
// ']', determine if the input string is valid.
const isValidParanthesis = (str) => {
    let stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    for (let char of str) {
        if (map[char]) {
            stack.push(char);
        }
        else {
            const poppedVal = stack.pop();
            if (char !== map[poppedVal]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
let str = "()";
let str1 = "(){}[]";
let Str2 = "([})";
let str3 = "[({})]"

console.log(isValidParanthesis(str)) // true
console.log(isValidParanthesis(str1)) // true
console.log(isValidParanthesis(Str2)) // false
console.log(isValidParanthesis(str3)) // true




