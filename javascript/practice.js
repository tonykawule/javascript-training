
// FizzBuzz assignment
function fizzBuzz(firstName, lastName) {
    const combinedLength = firstName.length + lastName.length;
    if (combinedLength % 3 === 0 && combinedLength % 5 === 0){
        console.log("FizzBuzz"); 
    } else if (combinedLength % 3 === 0){
        console.log("Fizz");
    } else if (combinedLength % 5 === 0){
        console.log("Buzz");
    }
}
fizzBuzz('tony', 'kawule');


// years assignment
const yearOfBirth = prompt("Please enter your year of birth:");
const currentYear = new Date().getFullYear();
const age = currentYear - yearOfBirth;
let ageRange;
if (age < 18) {
    ageRange = "minor";
} else if (age >= 18 && age <= 36) {
    ageRange = "youth";
} else {
    ageRange = "elder";
}

console.log(`You are a ${ageRange}.`);


//Given an integer array nums, return true if 
//any value appears at least twice in the array, and 
//return false if every element is distinct.

function containsDuplicate(nums) {
    const uniqueElements = new Set(nums);
    return uniqueElements.size !== nums.length;
}

console.log(containsDuplicate([1, 2, 3, 4, 5])); 


// 

var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i];
        let num2 = target - num1;
        
        if (map.has(num2)) {
            return [map.get(num2), i];
        }

        map.set(num1, i);
    }
    
    return null; 
};

let result = twoSum([3, 2, 4], 6);
console.log(result); 


//Given a non-empty array of integers nums, every element 
//appears twice except for one. Find that single one.

function singleNumber(nums) {
    let arr = 0;
    
    for (let num of nums) {
        arr ^= num; 
    }
    
    return arr;
}

let arr = singleNumber([4, 1, 2, 1, 2]);
console.log(result); 

//Given an array nums of size n, return the majority element. 
//The majority element is the element that appears more than ⌊n / 2⌋ 
//times. You may assume that the majority element always exists in the 
//array.

function majorityElement(nums) {
    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
}

let res = majorityElement([3, 3, 3, 4, 2, 4, 3, 4, 2, 4, 4, 3, 3]);
console.log(res); 


//
function addDigits(num) {
    while (num >= 10) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        num = sum;
    }
    return num;
}

console.log(addDigits(38)); 
console.log(addDigits(123)); 
console.log(addDigits(999)); 

//Write a function named firstPalindrome which takes a parameter: words. 
//Given an array of string words, return the first palindromic string in the array. 
//If there is no such string, return an empty string "".
//A string is palindromic if it reads the same forward and backward.

function firstPalindrome(word) {
    let left = 0;
    let right = word.length - 1;
    
    while (left < right) {
        if (word[left] !== word[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}

let words = ["car", "racecar", "level", "world"];
console.log(firstPalindrome(words)); 


//Given an Array containing integers, floats, 
//and one character strings, write a function that takes 
//an Array as a parameter and returns an Object with keys evens, 
//odds, and chars. The value for evens is an array of sorted even 
//numbers, the value for odds is a list of sorted odd numbers and 
//chars is a list of sorted single-character strings.

function categorizeArray(arr) {
    const categorize = {
        evens: [],
        odds: [],
        chars: []
    };

    arr.forEach(item => {
        if (typeof item === 'number') {
            if (item % 2 === 0) {
                categorize.evens.push(item);
            } else {
                categorize.odds.push(item);
            }
        } else if (typeof item === 'string' && item.length === 1) {
            categorize.chars.push(item);
        }
    });

    categorize.evens.sort((a, b) => a - b);
    categorize.odds.sort((a, b) => a - b);
    categorize.chars.sort();

    return categorize;
}

const inputArray = [3, 4, 'a', 7, 'c', 2, 'b', 5];
let categorize = categorizeArray(inputArray);
console.log(categorize);

//Write a function to find the longest common prefix string 
//amongst an array of strings. If there is no common prefix, 
//return an empty string "".

function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";

    // Start by assuming the whole first string is the common prefix
    let prefix = strs[0];

    // Compare this prefix with each string in the array
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            // Reduce the prefix by one character from the end
            prefix = prefix.substring(0, prefix.length - 1);
            // If there's no common prefix, return an empty string
            if (prefix === "") return "";
        }
    }
    return prefix;
}

const word = ["ceo", "cow", "cart"];
console.log(longestCommonPrefix(word)); 














