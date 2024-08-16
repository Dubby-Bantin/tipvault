export type Tip = {
  id: string;
  title: string;
  description: string;
  language: string;
  tags: string[];
  created_at: string;
  category?: string;
  isNew?: boolean;
};

export const tips: Tip[] = [
  {
    id: "1",
    title: "How to Reverse a String in Python",
    description:
      "You can reverse a string in Python using slicing: `reversed_string = your_string[::-1]`.",
    language: "Python",
    tags: ["string", "reverse", "slicing"],
    created_at: "August 20, 2024 12:08 PM",
  },
  {
    id: "2",
    title: "Using `map()` Function in JavaScript",
    description:
      "The `map()` function in JavaScript is used to iterate over an array and apply a function to each element, returning a new array.",
    language: "JavaScript",
    tags: ["array", "iteration", "map"],
    created_at: "2 January 2024, 5:35PM",
  },
  {
    id: "3",
    title: "Efficiently Reading Large Files in Java",
    description:
      "Use `BufferedReader` to read large files efficiently in Java. It reduces the number of I/O operations.",
    language: "Java",
    tags: ["file", "in-output", "BufferedReader"],
    created_at: "3 January 2024, 5:40PM",
  },
  {
    id: "4",
    title: "Sorting a List of Dictionaries in Python",
    description:
      "To sort a list of dictionaries in Python by a specific key, use the `sorted()` function with a lambda: `sorted_list = sorted(list_of_dicts, key=lambda x: x['key'])`.",
    language: "Python",
    tags: ["sorting", "dictionary", "lambda"],
    created_at: "4 January 2024, 5:50PM",
  },
  {
    id: "5",
    title: "Using `reduce()` in JavaScript",
    description:
      "The `reduce()` function in JavaScript reduces an array to a single value by applying a reducer function to each element.",
    language: "JavaScript",
    tags: ["reduce", "array", "reduction"],
    created_at: "5 January 2024, 5:55PM",
  },
  {
    id: "6",
    title: "Asynchronous Programming in Python with `asyncio`",
    description:
      "Use the `asyncio` library in Python to write asynchronous code, allowing you to run multiple I/O-bound tasks concurrently.",
    language: "Python",
    tags: ["asyncio", "concurrency", "asynchronous"],
    created_at: "6 January 2024, 6:00PM",
  },
  {
    id: "7",
    title: "Handling Exceptions in Java",
    description:
      "In Java, use try-catch blocks to handle exceptions and prevent your program from crashing due to unexpected errors.",
    language: "Java",
    tags: ["exceptions", "error handling", "try-catch"],
    created_at: "7 January 2024, 6:05PM",
  },
  {
    id: "8",
    title: "Using Lambdas in C++ for Inline Functions",
    description:
      "Lambdas in C++ allow you to create anonymous inline functions which can be used where a function pointer is required.",
    language: "C++",
    tags: ["lambda", "inline function", "anonymous function"],
    created_at: "8 January 2024, 5:45PM",
  },
  {
    id: "9",
    title: "Creating RESTful APIs with Node.js and Express",
    description:
      "Node.js and Express.js provide a simple and efficient way to create RESTful APIs, allowing your application to communicate with a client via HTTP requests.",
    language: "JavaScript",
    tags: ["REST", "API", "Express"],
    created_at: "9 January 2024, 6:10PM",
  },
  {
    id: "10",
    title: "Using `std::vector` in C++",
    description:
      "The `std::vector` is a dynamic array in C++ that can resize itself automatically when elements are added or removed.",
    language: "C++",
    tags: ["vector", "dynamic array", "std"],
    created_at: "10 January 2024, 6:15PM",
  },
  {
    id: "11",
    title: "Leveraging List Comprehensions in Python",
    description:
      "List comprehensions provide a concise way to create lists in Python. They can replace loops for generating lists from sequences.",
    language: "Python",
    tags: ["list comprehension", "sequences", "loops"],
    created_at: "11 January 2024, 6:20PM",
  },
  {
    id: "12",
    title: "Understanding Promises in JavaScript",
    description:
      "Promises in JavaScript represent a value that may be available now, or in the future, or never. They are used for handling asynchronous operations.",
    language: "JavaScript",
    tags: ["promises", "asynchronous", "operations"],
    created_at: "12 January 2024, 6:25PM",
  },
  {
    id: "13",
    title: "Working with Streams in Java",
    description:
      "Java Streams API allows functional-style operations on streams of elements, such as map-reduce transformations on collections.",
    language: "Java",
    tags: ["streams", "collections", "map-reduce"],
    created_at: "13 January 2024, 6:30PM",
  },
  {
    id: "14",
    title: "Using `std::unique_ptr` in C++",
    description:
      "`std::unique_ptr` is a smart pointer in C++ that ensures a single object is owned by one pointer, managing its lifecycle.",
    language: "C++",
    tags: ["unique_ptr", "smart pointer", "memory management"],
    created_at: "14 January 2024, 6:35PM",
  },
  {
    id: "15",
    title: "Using Generators in Python",
    description:
      "Generators in Python allow you to iterate over a sequence of values lazily, saving memory by yielding one item at a time.",
    language: "Python",
    tags: ["generators", "memory management", "lazy evaluation"],
    created_at: "15 January 2024, 6:40PM",
  },
  {
    id: "16",
    title: "Implementing Modules in JavaScript",
    description:
      "JavaScript ES6 introduced modules, allowing you to split your code into multiple files, each responsible for a specific piece of functionality.",
    language: "JavaScript",
    tags: ["modules", "ES6", "code organization"],
    created_at: "16 January 2024, 6:45PM",
  },
  {
    id: "17",
    title: "Creating Immutable Objects in Java",
    description:
      "Immutable objects in Java are objects whose state cannot be modified after they are created. Use final variables and no setters.",
    language: "Java",
    tags: ["immutability", "final", "objects"],
    created_at: "17 January 2024, 6:50PM",
  },
  {
    id: "18",
    title: "Using `std::thread` for Multithreading in C++",
    description:
      "The `std::thread` class in C++ allows you to create and manage threads, enabling concurrent execution of code.",
    language: "C++",
    tags: ["threads", "concurrency", "multithreading"],
    created_at: "18 January 2024, 6:55PM",
  },
  {
    id: "19",
    title: "Using Decorators in Python",
    description:
      "Decorators in Python are functions that modify the behavior of another function, often used for logging, timing, or access control.",
    language: "Python",
    tags: ["decorators", "function modification", "logging"],
    created_at: "19 January 2024, 7:00PM",
  },
  {
    id: "20",
    title: "Handling JSON in JavaScript",
    description:
      "JavaScript provides `JSON.parse()` and `JSON.stringify()` methods to convert between JSON strings and JavaScript objects.",
    language: "JavaScript",
    tags: ["JSON", "parsing", "serialization"],
    created_at: "20 January 2024, 7:05PM",
  },
  {
    id: "21",
    title: "Using Enums in Java",
    description:
      "Enums in Java are a special data type that enables a variable to be a set of predefined constants.",
    language: "Java",
    tags: ["enums", "constants", "data types"],
    created_at: "21 January 2024, 7:10PM",
  },
  {
    id: "22",
    title: "Using `std::shared_ptr` in C++",
    description:
      "`std::shared_ptr` is a smart pointer in C++ that maintains a reference count to manage the lifetime of an object shared by multiple pointers.",
    language: "C++",
    tags: ["shared_ptr", "smart pointer", "reference counting"],
    created_at: "22 January 2024, 7:15PM",
  },
  {
    id: "23",
    title: "Creating React Components",
    description:
      "In React, you can create reusable components using JavaScript functions or classes. Components can be functional or class-based.",
    language: "React",
    tags: ["React", "components", "functional", "class-based"],
    created_at: "August 20, 2024 12:08 PM",
  },
  {
    id: "24",
    title: "Managing State with React Hooks",
    description:
      "React hooks, like `useState` and `useReducer`, allow you to manage state in functional components.",
    language: "React",
    tags: ["React", "hooks", "state management"],
    created_at: "24 January 2024, 7:25PM",
  },
  {
    id: "25",
    title: "Handling Form Submission in React",
    description:
      "In React, handle form submissions by creating a function to process form data and use controlled components to manage input values.",
    language: "React",
    tags: ["React", "forms", "submission", "controlled components"],
    created_at: "25 January 2024, 7:30PM",
  },
  {
    id: "26",
    title: "Using `useEffect` Hook in React",
    description:
      "The `useEffect` hook in React allows you to perform side effects in functional components, such as data fetching and subscriptions.",
    language: "JavaScript",
    tags: ["React", "useEffect", "side effects"],
    created_at: "26 January 2024, 7:35PM",
  },
  {
    id: "27",
    title: "Handling Routing in React with React Router",
    description:
      "React Router is a library for managing routing in React applications, allowing you to define routes and navigate between them.",
    language: "React",
    tags: ["React", "React Router", "routing"],
    created_at: "27 January 2024, 7:40PM",
  },
  {
    id: "28",
    title: "Using `map()` Method in Python",
    description:
      "The `map()` function in Python applies a given function to all items in an input list and returns a map object.",
    language: "Python",
    tags: ["map", "function", "list"],
    created_at: "28 January 2024, 7:45PM",
  },
  {
    id: "29",
    title: "Using Arrow Functions in JavaScript",
    description:
      "Arrow functions provide a concise syntax for writing function expressions in JavaScript, and they do not bind their own `this` context.",
    language: "JavaScript",
    tags: ["arrow functions", "syntax", "this"],
    created_at: "29 January 2024, 7:50PM",
  },
  {
    id: "30",
    title: "Creating Immutable Collections in Java",
    description:
      "Java provides immutable collection implementations like `Collections.unmodifiableList()` to prevent modification after creation.",
    language: "Java",
    tags: ["collections", "immutability", "unmodifiable"],
    created_at: "30 January 2024, 7:55PM",
  },
  {
    id: "31",
    title: "Using `std::map` in C++",
    description:
      "The `std::map` in C++ is an associative container that stores key-value pairs, with unique keys and sorted order by key.",
    language: "C++",
    tags: ["map", "associative container", "key-value"],
    created_at: "31 January 2024, 8:00PM",
  },
  {
    id: "32",
    title: "Understanding Context in React",
    description:
      "React Context provides a way to share values between components without passing props down manually through every level.",
    language: "React",
    tags: ["React", "context", "state management"],
    created_at: "1 February 2024, 5:30PM",
  },
  {
    id: "33",
    title: "Using `useMemo` Hook in React",
    description:
      "The `useMemo` hook in React helps to optimize performance by memoizing expensive calculations between renders.",
    language: "React",
    tags: ["React", "useMemo", "performance"],
    created_at: "2 February 2024, 5:35PM",
  },
  {
    id: "34",
    title: "Building Custom Hooks in React",
    description:
      "Custom hooks in React allow you to extract and reuse logic across components, making your code more modular.",
    language: "React",
    tags: ["React", "custom hooks", "reusability"],
    created_at: "3 February 2024, 5:40PM",
  },
  {
    id: "35",
    title: "Using `useCallback` Hook in React",
    description:
      "The `useCallback` hook in React returns a memoized version of the callback function, useful for optimizing performance.",
    language: "React",
    tags: ["React", "useCallback", "performance"],
    created_at: "4 February 2024, 5:45PM",
  },
  {
    id: "36",
    title: "Handling Events in React",
    description:
      "In React, event handling is done using camelCase syntax and you need to pass the event handler function as a prop.",
    language: "React",
    tags: ["React", "events", "event handling"],
    created_at: "5 February 2024, 5:50PM",
  },
  {
    id: "37",
    title: "Using `async/await` in JavaScript",
    description:
      "`async/await` syntax in JavaScript simplifies working with asynchronous code, making it look and behave more like synchronous code.",
    language: "JavaScript",
    tags: ["async/await", "asynchronous", "synchronous"],
    created_at: "6 February 2024, 5:55PM",
  },
  {
    id: "38",
    title: "Managing User Inputs with React Forms",
    description:
      "In React, handle user inputs with controlled components, where form inputs are bound to component state.",
    language: "React",
    tags: ["React", "forms", "controlled components"],
    created_at: "7 February 2024, 6:00PM",
  },
  {
    id: "39",
    title: "Using `fetch` API in JavaScript",
    description:
      "The `fetch` API provides a way to make network requests and handle responses in JavaScript, replacing older XMLHttpRequest.",
    language: "JavaScript",
    tags: ["fetch", "API", "network requests"],
    created_at: "8 February 2024, 6:05PM",
  },
  {
    id: "40",
    title: "Using `std::vector` for Dynamic Arrays in C++",
    description:
      "`std::vector` is a versatile container in C++ that manages a dynamic array with automatic resizing.",
    language: "C++",
    tags: ["vector", "dynamic arrays", "resizing"],
    created_at: "9 February 2024, 6:10PM",
  },
  {
    id: "41",
    title: "Optimizing Performance with React Profiler",
    description:
      "React Profiler helps you to measure the performance of your React application and identify performance bottlenecks.",
    language: "React",
    tags: ["React", "performance", "profiler"],
    created_at: "10 February 2024, 6:15PM",
  },
  {
    id: "42",
    title: "Using `Object.keys()` in JavaScript",
    description:
      "`Object.keys()` returns an array of a given object's property names, useful for iterating over object properties.",
    language: "JavaScript",
    tags: ["Object.keys", "objects", "iteration"],
    created_at: "11 February 2024, 6:20PM",
  },
  {
    id: "43",
    title: "Using `String.format()` in Java",
    description:
      "`String.format()` in Java provides a way to create formatted strings using placeholders for variable substitution.",
    language: "Java",
    tags: ["String.format", "formatting", "strings"],
    created_at: "12 February 2024, 6:25PM",
  },
  {
    id: "44",
    title: "Handling Multiple Threads in C++",
    description:
      "In C++, manage multiple threads using `std::thread` and synchronization primitives like `std::mutex`.",
    language: "C++",
    tags: ["threads", "synchronization", "mutex"],
    created_at: "13 February 2024, 6:30PM",
  },
  {
    id: "45",
    title: "Using `with` Statement in Python",
    description:
      "The `with` statement in Python simplifies exception handling and resource management by encapsulating code blocks.",
    language: "Python",
    tags: ["with statement", "exception handling", "resource management"],
    created_at: "14 February 2024, 6:35PM",
  },
  {
    id: "46",
    title: "Creating Dynamic Web Pages with React",
    description:
      "React allows you to create dynamic web pages that update in real-time based on user interactions and application state.",
    language: "React",
    tags: ["React", "dynamic web pages", "state management"],
    created_at: "15 February 2024, 6:40PM",
  },
  {
    id: "47",
    title: "Using `try-catch-finally` in Java",
    description:
      "The `try-catch-finally` construct in Java allows you to handle exceptions and execute code that must run regardless of whether an exception is thrown.",
    language: "Java",
    tags: ["try-catch-finally", "exception handling", "finally"],
    created_at: "16 February 2024, 6:45PM",
  },
  {
    id: "48",
    title: "Managing Component Lifecycle in React",
    description:
      "In React, manage the component lifecycle using lifecycle methods in class components or hooks in functional components.",
    language: "React",
    tags: ["React", "component lifecycle", "hooks"],
    created_at: "17 February 2024, 6:50PM",
  },
  {
    id: "49",
    title: "Using `async` with React Hooks",
    description:
      "You can use `async` functions within React hooks to handle asynchronous operations, such as data fetching.",
    language: "React",
    tags: ["React", "async", "hooks"],
    created_at: "18 February 2024, 6:55PM",
  },
  {
    id: "50",
    title: "Handling API Responses in React",
    description:
      "Process API responses in React using hooks like `useEffect` and state management to update the UI based on the response.",
    language: "React",
    tags: ["React", "API", "response handling"],
    created_at: "19 February 2024, 7:00PM",
  },
  {
    id: "51",
    title: "Using `String.join()` in Java",
    description:
      "`String.join()` in Java allows you to concatenate a sequence of strings with a specified delimiter.",
    language: "Java",
    tags: ["String.join", "concatenation", "strings"],
    created_at: "20 February 2024, 7:05PM",
  },
  {
    id: "52",
    title: "Using `std::function` in C++",
    description:
      "`std::function` is a versatile class template in C++ that can hold any callable object, including function pointers, lambda expressions, and bind expressions.",
    language: "C++",
    tags: ["std::function", "callable objects", "lambda expressions"],
    created_at: "21 February 2024, 7:10PM",
  },
  {
    id: "53",
    title: "Using `StringBuilder` in Java",
    description:
      "`StringBuilder` in Java provides an efficient way to create and manipulate strings when you need to modify them frequently.",
    language: "Java",
    tags: ["StringBuilder", "string manipulation", "efficiency"],
    created_at: "22 February 2024, 7:15PM",
  },
  {
    id: "54",
    title: "Creating Custom Hooks for Form Validation in React",
    description:
      "Create custom hooks in React for form validation to keep your code clean and modular while handling form input validations.",
    language: "React",
    tags: ["React", "custom hooks", "form validation"],
    created_at: "23 February 2024, 7:20PM",
  },
  {
    id: "55",
    title: "Handling Large Data Sets with React",
    description:
      "Optimize performance when dealing with large data sets in React by using techniques like virtualization and memoization.",
    language: "React",
    tags: ["React", "performance", "data sets"],
    created_at: "24 February 2024, 7:25PM",
  },
  {
    id: "56",
    title: "Using `withContext` in React for Theming",
    description:
      "The `withContext` function in React allows you to provide context to components for theming and other global settings.",
    language: "React",
    tags: ["React", "context", "theming"],
    created_at: "25 February 2024, 7:30PM",
  },
  {
    id: "57",
    title: "Creating Responsive Layouts with React and CSS",
    description:
      "Combine React with CSS media queries to create responsive layouts that adapt to different screen sizes and orientations.",
    language: "React",
    tags: ["React", "CSS", "responsive layouts"],
    created_at: "26 February 2024, 7:35PM",
  },
  {
    id: "58",
    title: "Implementing Error Boundaries in React",
    description:
      "Error boundaries in React are used to catch JavaScript errors anywhere in the component tree, log those errors, and display a fallback UI.",
    language: "React",
    tags: ["React", "error boundaries", "error handling"],
    created_at: "27 February 2024, 7:40PM",
  },
  {
    id: "59",
    title: "Using `Array.prototype.filter()` in JavaScript",
    description:
      "The `filter()` method in JavaScript creates a new array with all elements that pass a test implemented by a provided function.",
    language: "JavaScript",
    tags: ["filter", "array", "filtering"],
    created_at: "28 February 2024, 7:45PM",
  },
  {
    id: "60",
    title: "Creating React Context Providers",
    description:
      "React Context Providers allow you to share state across components without passing props manually, enhancing code modularity.",
    language: "React",
    tags: ["React", "context providers", "state management"],
    created_at: "29 February 2024, 7:50PM",
  },
];
