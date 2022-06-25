// ASSESSMENT 2: Coding Practical Questions with Jest

const { array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

// describe("functionName", () => {
//     it("describes what my test and function does", () => {
//       expect(functionName("pass any params needed")).toEqual("Expect output")
//     })
//  })

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

// describe(evenDivisiblebyThree, () => {
//     it("takes a number as an argument and decides if the number is evenly divisble by three or not",()=> {
//         expect(evenDivisiblebyThree(15)).toEqual("15 is divisible by three")
//         expect(evenDivisiblebyThree(0)).toEqual("0 is divisible by three")
//         expect(evenDivisiblebyThree(-7)).toEqual("-7 is not divisible by three")
//     })
// })

 //* RAN TEST (RESULTS BELOW): *//

// ReferenceError: evenDivisiblebyThree is not defined

const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"


// b) Create the function that makes the test pass.

// Pseudocode: 
// Declare a function called evenDivisiblebyThree.
// Set parameters referenced as num1, num2, num3. 
// Use conditional to evalute which inputs are are divisible by three.
// Return the specific numbers that are divisible and which ones aren't divisible by three. 

// const evenDivisiblebyThree = (num1, num2, num3) => {
//     if (num1 % 3==0) {
//         return "15 is divisible by three"
//     }   else if (num2 % 3==0){
//         return "0 is divisible by three"
//     }   else if (num3 % 3!==0){
//         return "-7 is not divisible by three"
//     }
// }

 //* RAN TEST (RESULTS BELOW): *//

// FAIL  ./code-challenges.test.js
// ● Test suite failed to run

//   ReferenceError: Cannot access 'evenDivisiblebyThree' before initialization

// Note to Instructor: I looked up the error and according to my research this error occurs becuase the the function set up is trying to access the variable before it's initialised so I tried restructuring my code but was getting syntax errors so I'ma bit lost because it looks correct to me. Anyway, this is why I have commented out my #1 - code lines, so I can still run tests for the other function problems.

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// describe(arrayofCapitalization, () => {
//     it("takes in an array of words and returns an array with all the words capitalized", () => {
//       expect(arrayofCapitalization("randomNouns1")).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//       expect(arrayofCapitalization("randomNouns2")).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
//     })
//  })

 //* RAN TEST (RESULTS BELOW): *//

 // ReferenceError: arrayofCapitalization is not defined

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// b) Create the function that makes the test pass.

// Pseudocode: 
// Declare a function called arrayofCapitalization.
// Set parameters allwordNouns
// Use conditional to convert array into a on with all capitalization
    // Use .join to convert to string
    // Use .charAt(0) && .toUpperCase() to capitalize entire string
    // Use .split to convert string back to array once capitalized
// Return output is an array containing all capitalized words.

// const arrayofCapitalization = (array) => {
//     return array.join(randomNouns1,randomNouns2) + array.charAt(0).toUpperCase +array.split (" ")
    
//     }
    
   
// }

//* RAN TEST (RESULTS BELOW): *//

// FAIL  ./code-challenges.test.js
// ● Test suite failed to run

//   Jest encountered an unexpected token

//   Details:

//   SyntaxError:

// Note to Instructor: I'm at a lost here with this problem, I don't even understand why I'm getting a syntax error (on line 123) or how to correctly use/order these commands. It feels like this entire problem is in Chinese. Literally spent hours on it even though there's not much code. I really thought I was understanding Jest but I haven't even got one of these tests to come back clear and I'm not sure why. This explains why I have commented out my #2 - code lines, so I can still run tests for the other function problems.


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe(pickupVowel, () => {
    it("takes in a string and logs the index of the first vowel", () => {
      expect(pickupVowel("vowelTester1")).toEqual(1)
      expect(pickupVowel("vowelTester2")).toEqual(0)
      expect(pickupVowel("vowelTester3")).toEqual(2)
    })
 })

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

//* RAN TEST (RESULTS BELOW): *//

// ReferenceError: pickupVowel is not defined

// b) Create the function that makes the test pass.

// Pseudocode: 
// Declare a function called pickupVowel.
// Set parameters of string
// Use conditional to evalute string.
// Return index of first vowel location. 

// const pickupVowel = (vowels) => {
//    return vowels.search(a,e,i,o,u)
// }

// const pickupVowel = (vowels) => {
//    return vowels.fitler(a,e,i,o,u)
//    return 1 || 0 || 2
// }

const pickupVowel = (vowels) => {
    for (int i =0; i<vowelTester.length, i++) {
        if ()
    }
    }

//* RAN TEST (RESULTS BELOW): *//

// FAIL  ./code-challenges.test.js
// ● Test suite failed to run

//   ReferenceError: Cannot access 'pickupVowel' before initialization

// Note to Instructor: I was a bit unsure on how to go about this one through the Jest nomenclature. Found this one a bit frustrating because I initially tried using something I found in an online search but felt it was missing something, so I tried .filter then remembered its not an array, so then I started to do a for loop for it but I was unsure of the syntax and how to fill it out with the Jest variables. 