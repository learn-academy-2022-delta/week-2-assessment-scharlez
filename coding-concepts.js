// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2022"
console.log(cohort.split(""))

// a) Your answer: Delta, ,2022
// b) Verify and explain: (Answer/Explanation found below:)

'D', 'e', 'l', 't',
'a', ' ', '2', '0',
'2', '2'

//Explain: .split is a built-in method that turns strings into array. Often times it can used with its "opposite method" .join which conversely turns arrays into strings. 


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: undefined 
// b) Verify and explain: undefined - This was undefined because "name" was never specified previously so there is no context for what used, it must be defined first before it came come back with a sufficient output.  


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: [8, 10, 12, 14, 16] - .map is a built-in method that often acts as a simplied for loop meaning its not changing the original content of the array but simple adding a function/action to it that multiples each element by 2 and outputs the same array but with these updated modifications/perameters. 


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer:[11, 13, 15]
// b) Verify and explain:[ 11, 13, 15 ] - .filter is a built-in method that filters out elements in an array depending upon the inputed parameters; in this case we are wanting to ouput only values that are not divisible by 2, which would be 11, 13, and 15. 


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: JavaScript - Line 60 is essentially asking from within the defined object, what is the first value "[0]" inside the index of languages? - so here it would: Javascript. 


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer:
// Learn { student: "George", cohort: "Bravo", year: 2022 }

// b) Verify and explain: Learn { student: 'George', cohort: 'Bravo', year: 2022 } - Here we have our template or class called "Learn", so Line 75 is asking from our previously established template, if "George" is plugged in, what would be the output? - which in this case would be the answer/output previously stated or found above. 
