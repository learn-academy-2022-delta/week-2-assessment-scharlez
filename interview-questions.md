# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer: Parameter can be viewed as a variable that set to define something in a function. While an argument can be seen as a value of that function. So when you return an output it will be a combination of what commands or built in methods were used in tandem with the agrument(s) but are defined by the parameters. 

  Researched answer: Parameters are the variables or the collection of "names" being used or listed within a function that defines it. These names are customized to the function and it is best to keep them reflective on the actions being done for future reference, transparency, and pair programming.  The arguments from a function are the real values that are executed to the function when the active lines of code are invoked. Due to these being used during invocation, one will see the built in methods or commands being used side-by-side. Parameters and arguments are different but both are necessary to have a successful and functional code. 



2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: The JavaScript built in method .map() has predefined parameters like values, indexes, and arrays. These all can be used together or seperately but at least one value must be used for the function to run this built in method successfully. 

  Researched answer: The JavaScript built in method .map() requires a function defintion/argument as its initial parameter meaning there must at least be a value provided within the designated parentheses for the code to run correctly. However, an index or additional array can be used together with the previously mentioned requirement (value) as optional additions to the function. 



3. What is the difference between map and filter?

  Your answer: The map method uses the original content of the array and produces the same array just after it has undergone a function/action to it. While the filter method is similiar because it takes the same array but with its functionality edits out certain elements within an array based on the parameters set. 

  Researched answer: Both the map and the filter methods focus primarily the with array and will produce an output that is essentially an updated version of the original array. The difference is with the map method will be altering each element within the array but still return the same length of that array. Conversely, with the filter method inspect each element of an array and based on the parameters given it will eliminate certain ones in the output and thus create an array that is shorter in length than the original. 


4. What is the difference between a function and a method?

  Your answer: A function is lines of code written in a text editor to perform certain tasks. A method is a type of function that deals exclusively with objects. Function and method have an interwined relationship because a method will always be a function but a function doesn't necessarily have to be a function; similiar to a square is a type of rectangle but not all rectangles are squares. 

  Researched answer: A function is a sequence of written code that are designed to perform specific sets of tasks. It is defined by a function keyword followed and optional parameters (depending on the circumstance) and is encapsulated by Curly brakets. Functions can be associated with objects or not, however when an object is involved this type of function is known as a method. With a method contains that can be identified by the name of its object and and its method name (specific name given that often defines the task action) through the use of dot notation or square braket notation. Lastly, just as classical is a type of music but not all music of course, method is simply one type of function.


5. What is object destructuring?

  Your answer: Object destructuring is breaking down an object into specific output. So if you had a function with that contained alot of personal informatin like names, address, emails, etc and need to limit all that to just one quick output of a particular name and/or address, you would log that in and the return should produce just that information. 

  Researched answer: Object destructuring is a unique way of redefining the available variables; meaning it allows the programmer to grab objects or arrays and break down the connected values into individualized variables. This is useful because when comes to nested properties, you end up saving a lot of time by using object destructuring due to being able to efficiently alter and pull object properties. 



6. STRETCH: What is hoisting in JavaScript?

  Your answer:

  Researched answer:



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance: recycles the previously used methods and properties of an already created class when you wish to make a new one. 

2. React: open-source front-end Javascript library used by developers for creating user interfaces centered around components and viewable through a local web Browser. 

3. React state: within React its when an object that stores information that is suspetible to be changed at later point during the life span of a component. 

4. React lifecycle methods: Consist of 3 main stages --> mounting, updating and then unmounting. 

* constructor() - utilized during the mouting, used with every new component creation.

* render() - utilized during the mouting stage & updating stages, a class method for creating and booting up an object's presence within a class. 

* componentDidMount() - utilized during the mouting, used after a component as been update within the DOM. 

* componentDidUpdate() - utilized during the mouting stage & updating stages,used to invoke code after a component has been updated. 

* componentWillUnmount() - utilized during the unmouting stage, used to invoke code when a component somehow gets destroyed or unmounted from the DOM. 

5. DOM: Stands for Document Object Model, is a programming interface for HTML documents used to open and edit documents as it is way to bring up webpage in a structured way. 
