
//Problem 1

let nums =[2,7,11,15];

let arrayTargets=[nums[0], nums[1]];
// console.log(arrayTargets);
let abc= arrayTargets.reduce((a, b) => a + b, 0);
// console.log(abc); // Output here



let nums2 =[3,2,4];

let arrayTargets2=[nums2[1], nums2[2]];
//  console.log(arrayTargets2)
let abc2= arrayTargets2.reduce((b, c) => b + c, 0);
// console.log(abc2); // Output here

//Problem 2

let inputString1= "abcabcbb"
let inputString2= "bbbbb"

function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    let charIndexMap = new Map();

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= start) {
            start = charIndexMap.get(currentChar) + 1;
        }

        charIndexMap.set(currentChar, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }       
    return maxLength;
}

console.log(lengthOfLongestSubstring(inputString1));

//Problem 4

let inputArray = [1, 2, 3, 4, 5];
prefixProduct = 1;
let prefixProductArray = inputArray.map(num => {
    let currentProduct = prefixProduct;
    prefixProduct *= num;
    return currentProduct;
});


let inputArray2 = [2,3,4,5];
prefixProduct2 = 1;
let prefixProductArray2 = inputArray2.map(num => {
    let currentProduct = prefixProduct2;
    prefixProduct2 *= num;
    return currentProduct;
});

console.log(prefixProductArray);
console.log(prefixProductArray2);
 
// Not sure how to bring the desired output

//Problem 5

let input1 = [1,3,4,2,2];
let input2 = [3,1,3,4,2];

function findDuplicate(nums) {
    let seen = new Set();
    for (let num of nums) {
        if (seen.has(num)) {
            return num;
        }
        seen.add(num);
    }
    return -1; // Return -1 if no duplicate is found
}

console.log(findDuplicate(input1));
console.log(findDuplicate(input2));

//Problem 7 - Group Anagrams

let input3 = ["eat", "tea", "tan", "ate", "nat", "bat"];
let input4 = ["abc", "bca", "cab", "xyz", "zyx"];

hashMap = new Map();      
function groupAnagrams(strs) {  

    for (let str of strs) {
        let sortedStr = str.split('').sort().join('');
        if (!hashMap.has(sortedStr)) {
            hashMap.set(sortedStr, []);
        }
        hashMap.get(sortedStr).push(str);
    }
    return Array.from(hashMap.values());
}

console.log(groupAnagrams(input3));
console.log(groupAnagrams(input4));

// Problem 8 - Valid Parentheses

let input5 = "({[]})";
let input6 = "({[})]";

function isValid(s) {
    const stack = [];
    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of s) {
        if (pairs[char]) {
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}

console.log(isValid(input5));
console.log(isValid(input6));   


















