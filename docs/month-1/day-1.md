---
sidebar_position: 1
---

# Javascript - A Declarative Approach

Today I am starting my journey of learning at neogcamp for the next 6 months. In the coming 6 months I have planned to do a lot of hard work and become an advanced full stack we developer. I also want to help my other fellow mates in every possible ways I can and Try to become good at communication.

### Template Literals

Template literals are strings that are in backtick `( ` )` , allowing embedded expressions called substitutions.

```jsx
const name = "Mobashir Farhan";
const className = "xyz";
const location = "India";

console.log(
  `Hello from ${name} who is in ${className} and lives in ${location}`
);
```

In the above example you can see that in the `console.log` I’ve referenced the variable by using the `${variable}` . And one thing exciting about it is you can literally insert any kind of javascript expression or any function calls also and while the strings are being renders it will be interpolated along the way. So it’s a kind of IIFE you can say.

- While using template string you can simply break the line and it will be handled by javascript only. Whereas when we use regular string if we have to break a line we have to use `\n` which is called string continuation.

### Tagged Templates

In the above examples we were talking about untagged template literals which make them useful for string interpolation, multiline string etc.

Now we will learn about tagged template. So tagged template literals call a function called the tag function and help us to interpolate the string.

A tag function doesn’t need to return a string.

```jsx
const name = "Mobashir Farhan";
const className = 12;
const location = "India";

function makeCaps(strings, ...values) {
  let str = "";
  for (let i = 0; i < strings.length; i++) {
    if (i > 0) {
      if (typeof values[i - 1] == "string") {
        let caps = values[i - 1].toUpperCase();
        str += caps;
      } else {
        str += values[i - 1];
      }
    }
    str += strings[i];
  }
  return str;
}

console.log(
  makeCaps`Hello from ${name} who is in ${className} and lives in ${location}`
);
```

Usage of tagged template

1. Localization
2. Internationalization
3. Checking XSS before hand

<aside>
💡 Someone wrote some regex tag function and also JSX tag function.

</aside>

### String Padding `(ES2017)`

`padstart()` function takes two arguments, one is the total length of the string you want finally.

Points to keep in mind

1. If the first argument is just the length of the string there will be no padding added to it.
2. If the first argument is greater than the length of the string and second argument is missing , it will add white space by default.
3. If the length of second argument + length of string is greater than the first argument , then extra characters will be ignored.
4. If the length of the second argument is + length of the string then the character in the second string are repeated.

These are the examples which you can run to see it.

```jsx
let str = "Hello";

console.log(str.padStart(5)); // "Hello"
console.log(str.padStart(8)); // "   Hello"
console.log(str.padStart(8, "*")); // "***Hello"
console.log(str.padStart(8, "12345")); // "123Hello"
console.log(str.padStart(8, "ab")); // "abaHello"
```

<aside>
💡 `padend()` works in the same way

</aside>

### String Trimming `(ES2019)`

For trimming we have three methods and it only trims the white space.

1. trim()
2. trimEnd()
3. trimStart()

### Destructuring `(ES2015)`

The use as destructuring as a feature is to assign values from some larger structure. This is helpful when we have a large data and we only want to get some data then destructuring is a good way to do that.

Syntax

```jsx
let [
  { name: firstName, email: firstEmail = "nobody@none.tld" },
  {
    name: secondName,
    email: secondEmail = "nobody@none.tld", // default value
  },
] = getSomeRecords();
```

<aside>
💡 Here in the above example we have only destrucutred the first two element from the record of data. This code is also self documenting

</aside>

### Array Destructuring

```jsx
function getData() {
  return [1,2,3];
}

// old approach
let temp = getData();
let first = temp[0];
let second = temp[1];
let third = temp[2];

// using destructuring
const [
firstOne,
secondOne,
thirdOne
] = getData();

// another example
const [
firstOne,
...secondAndThird,
] = getData();

// logging
console.log("from old approach :",first, "from destructuring :",firstOne);
```

Some points to keep in mind

1. When we want to assign a default value we can simply use a syntax like this

```jsx
const [firstOne, secondOne = 10, thirdOne] = getData();
```

1. The default value is only set if the value is undefined and not in any other case.
2. If we want to keep a reference of the destructured data we can do this using the syntax below

```jsx
const [firstOne, secondOne = 10, thirdOne] = (temp = getData());
```

1. We can also use destructuring in the pattern below where we can assign the value in the object like this

```jsx
function getData() {
  return [1,2,3];
}

let obj = {};
// using destructuring
const [
object.firstOne,
object.secondOne,
object.thirdOne
] = getData();

```

1. Array destruturing is only the assigning part and not the declaration part.
2. If we want to gather data but to leave some data in between this the way we can do so

```jsx
function getData() {
  return [1, 2, 3, 4, 5, 6, 7];
}

const [firstOne, secondOne, thirdOne, , , ...sixthOneAndSevenOne] = getData();
```

1. If we want to swap two values we can also use destructuring

```jsx
let a = 20;
let b = 40;
[a, b] = [b, a];
```

1. We can also use destructuring while defining the function signature like this

```jsx
// using destructuring in the function parameters

function getData([first, second, third]) {
  return first + second + third;
}

console.log(getData([1, 2, 3]));
```

1. If we have some code like this below when we will try to assing value it will give a type error. Hence to fix that we have to give a fallback value for that.

```jsx
function getData() {
  return null;
}

const [first, second] = getData(); // throw an error

// to fix this we will add a fallback value

const [first, second] = getData() || [];
```

### Nested Array Destructuring

Example

```jsx
// nested array destructuring
function getData() {
  return [1, [2, 3], 4];
}

// old approach
let temp = getData();
let first = temp[0];
let temp2 = temp[1];
let second = temp2[0];
let third = temp2[1];
let fourth = temp[2];

// nested destructuring example
const [firstOne, [secondOne, thirdOne], fourthOne] = getData();

// logging
console.log("from old approach :", second, "from destructuring :", secondOne);
```

### Object Destructuring

Now we will have a look on object destructuring pattern. Let’s jump in

```jsx
// object destructuring pattern
function getData() {
  return {
    a: 1,
    b: 2,
    c: 3,
  };
}

// old appraoch
let temp = getData();
let first = temp.a;
let second = temp.b;
let third = temp.c;

// using destructuring
const { a: firstOne, b: secondOne, c: thirdOne } = getData();

// logging

console.log("from old appraoch : ", first, "using destructuring : ", firstOne);
```

Some points to keep in mind

1. While assigning the values the order doesn’t matter.
2. As we have handled the default value and fallback value the syntax will be same as of array but instead of returning array as fallback value we will use empty object.
3. If the source and the target is of same name we use a syntax like this

```jsx
// object destructuring pattern
function getData() {
  return {
    a: 1,
    b: 2,
    c: 3,
  };
}

// using destructuring
const { a, b, c } = getData();

// logging

console.log("data: ", a, b, c);
```

### Nested Object Destructuring

For nested destructuring the syntax will be like this

```jsx
// object destructuring pattern (nested)
function getData() {
  return {
    a: 1,
    b: {
      c: 3,
      d: 4,
    },
  };
}

// old appraoch
let temp = getData();
let first = temp.a;
let second = temp.b;
let third = second.c;
let fourth = second.d;

// using destructuring
const {
  a: firstOne,
  b: { c: thirdOne, d: fourthOne },
} = getData();

// logging

console.log("from old appraoch : ", third, "using destructuring : ", thirdOne);
```

Some other uses:

1. We can also use destructuring while defining the function signature and using it as a parameter.
2. While destructuring the object we can also assing same value to different variable like this

```jsx
let obj = {
  a: 1,
  b: {
    x: 2,
  },
  c: 3,
};

const {
  a,
  b,
  b: { x: insideB },
  c,
} = obj;

// logging
console.log(a, b, insideB, c);
```

1. We can also use destructuring inside obj with nested array or similar things.

### Named Arguments

In many language like Scala or Objective -C there is a notion of named arguments in function. Since in javascript when we define any function we need to know the order in which the arguments should be passed and hence it is kind of thing we need to remember while calling the function.

However we can achive something similar to named arguments in javascript using the destructuring syntax. Let’s have a look.

```jsx
function lookup({ store = [], id = -1 }) {
  return store[id];
}

// while calling
console.log(lookup({ store: [1, 2, 3, 4], id: 3 }));
```

In the above example the order doesn’t matter and hence we can easily use the function as we want without having any error.

So while using this patter we need to remember the name of the argument and hence we need to have a standard convention of naming things.

### Extending Object `(advanced usage)`

Sometimes we have some kind of default config for say AJAX calls and when we try to use it for some other usecase we usually change it very imperatively and it is a lot of work. But using destructuring we can achieve the same very easily like this

```jsx
function defaultSettings({
  url = "https://www.google.com",
  method = "GET",
  data = {},
} = {}) {
  return {
    url,
    method,
    data,
  };
}

let def = defaultSettings();
console.log(def);
let modified = defaultSettings({
  method: "POST",
  data: {
    email: "abc@lol.com",
    password: "*****",
  },
});
console.log(modified);
```

### Array methods

Examples `find()`,`findIndex()`,`includes()`.

```jsx
let arr = [{ a: 1 }, { a: 2 }];
let newArr = [1, 2, 3, 5, null];

let findUsingFindMethod = arr.find((item) => item && item.a > 1);

console.log(findUsingFindMethod);

let findUsingIndexOf = arr.findIndex((item) => item && item.a > 4);

console.log(findUsingIndexOf);

let findUsingIncludes = newArr.includes(9);

console.log(findUsingIncludes);
```

`Array.flat()`

Array.flat() takes one argument which specifies the number of level we want to flatten the array.

```jsx
let arr = [1, 2, [3, [4, 5]], 6, [7, 8, [9, 10]]];

console.log(arr.flat(0));
console.log(arr.flat(1));
console.log(arr.flat(2));
console.log(arr.flat(3));
```

### Iterators and Generators

When we have a data source and we want to get a single data source one at a time we use what is called and iterator pattern. And generators are somethings which gives us an iterator. Let’s look at some examples to learn a little bit more.

```jsx
let str = "Cat";
let arr = [1, 2, 3];

let iterator1 = str[Symbol.iterator]();
let iterator2 = arr[Symbol.iterator]();

// logging
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
```

Some points to keep in mind

1. Iterators cannot go backwards
2. rest operator uses iterator under the hood
3. Objects are not iterable in javascript

Example of generator function

```jsx
function* generatorFunction() {
  yield 1;
  yield 2;
}

let iterator = generatorFunction();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
```

### RegExp Improvements `ES2018`

1.**Lookahead :** The idea of lookahead is the matching works only if something after this also matches and look ahead has been in js way before.

```jsx
let msg = "Hello World";
// lookahead example
let reg1 = msg.match(/(l.)/g);
let reg2 = msg.match(/(l.)$/g);
let reg3 = msg.match(/(l.)(?=o)/g);
let reg4 = msg.match(/(l.)(?!o)/g);

// logging
console.log(reg1);
console.log(reg2);
console.log(reg3);
console.log(reg4);
```

1. **Lookbehind :** Lookbehind has not been in javascript but in es2018 it has been arrived. Let’s look at some of the code to get a more understanding.

```jsx
// lookbehind example
let msg = "Hello World";

let reg1 = msg.match(/(?<=e)(l.)/g);
let reg2 = msg.match(/(?<!e)(l.)/g);

// logging
console.log(reg1);
console.log(reg2);
```

1. dotall mode : The usual `.` operator in reg exp only used of to match charcter in a single line and skip the line break whereas the dotall mode match for every character in the string

```jsx
let mgs = `Hello my name
is
mobashir`;

msg.match(/r./); // null
// using dotall
msg.match(/r./s); // ["r"]
```

### Async Function Problems

1. await only PROMISES
2. The implementation of await is vulnerable to starvation which can cause infinite look in the event loop and can lead to denial of service.
3. You cannot externally cancel any async function once you invoke it and hence it will keep using microtask queue.

### Async Generator

Async generator are basically used to distinguished the use of the yield keyword as the pulling as well as the pushing mechanism by using async and await tegether.

```jsx
async function* fetchBooks(books) {
  for (let book of books) {
    let res = await fetch(book); // pulling
    if (res.status == 200) {
      let text = await res.text();
      yield text.toUpperCase(); // pushing
    } else {
      yield undefined;
    }
  }
}
```

### Async Generator Iterator

```jsx
// for await of loop
for await (let text of fetchBooks(books)) {
  console.log(text);
}
```

I think that’s all done for today.

Happy JavaScripting
