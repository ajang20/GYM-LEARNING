# TypeScript Quiz and Answers

New to TypeScript? No worries, this homework will help you better understand TypeScript.

## Recommendation

First, the following link will help to answer the questions.

* https://www.typescriptlang.org/docs/home.html TypeScript official site
* https://basarat.gitbooks.io/typescript/  TypeScript Deep Dive

Second, do more practice. **Try it in your favorite code editor**! I found it very useful in understanding important concept.

## Questions

### Basics

**1. How is TypeScript we write understood by the browser?**



**2. What is the difference between `interface` and `type` ? What is `extends`? **



**3. What is tsconfig.json?**

Make sure you understand the important property in the following sample tsconfig.json

```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "strictNullChecks": false,
    "module": "commonjs",
    "target": "es5",
    "lib": [
      "es5",
      "es7",
      "dom",
      "es2017"
    ],
    "jsx": "react"
  },
  "include": [
    "./src/**/*"
  ],
  "exclude": [
    "node_modules"
  ]
}

```



**4. What is the type of the variable `a`, `b` and `c`**

```typescript
const a = 'help';
let b: React.ReactNode = 'string';
const c = ['a', 'b', 'c', 5]
```

**5. Object Type-checking: Will the following code working without errors?**

```typescript
interface Params {
  name: string;
  value: number;
}

interface Params2 {
  name: string;
  value: number;
  path: string;
}

interface Params3 {
  name: string;
  path: string;
}

function hello(param: Params){
  console.log(param.name, param.value);
}


const a: Param2 = {
  name: 'string',
  value: 5,
  path: 'workspace'
}

const b: Param3 = {
  name: 'string',
  path: 'workspace'
}

// Will TS complain about following code?
hello({name: 'string', value: 5});
hello({name: 'string', value: 5, path: 'workspace'});
hello(a);
hello(b);
```

**6. Function type-checking: Will the following code going to work?**

```typescript
const a = (name: string): void => {
  console.log(name);
};

const b: Function = (name: string) => {
  console.log(name);
};

const c = (name: string, middleName: string) => {
  console.log(name);
  console.log(middleName);
};

const d = (name: string): string => {
  console.log(name);
  return name;
};

function sayHello(sayFn: (name: string) => void) {
  sayFn('David');
}

// Will TS complain about following code?
sayHello(a);
sayHello(b);
sayHello(c);
sayHello(d);
```



### Combination of Types

**7. AND**

```typescript
interface A {
  name: string;
}

interface B {
  age: number;
}

// How to use A and B to create a type that has both `name` and `age` as property?
```

**8. OR**: How to declare a type that is either number or string

```typescript
type A = ??;
let a: A = '5';
a = 5; // TS should not complain
```



### Type Inference

**9. Functions inference: What will be inferred**

```typescript
function add(a, b){
  return a + b;
}
add(5, 6);

function add2(a: number, b: number){
  return [a, b];
}
```



**10. Object inference: What will be inferred**

```typescript
const a = {
  name: 'David',
  age: 24,
}

// Will TS complain?
a.name = 'Derui';
a.age = '24';
a.lastName = 'Deng';
```



### Generics

Generics knowledge is very important when you are dealing with 3rd party library like react, redux, lodash.

**11. What is generics in TypeScript?**



**12. Use generic in the param of the function**

```typescript
// FIXME: using generics on this function to solve the issue
function getFirstElement(array:Array<any>){
  return array.length?array[0]:null;
}

const one = getFirstElement([5]); // one is implicit `any`
one.split('5');  // FIXME: This is a bug, but the TS fails to find it.
const two = getFirstElement(['5']); // two is also `any`
two.split(''); // This is working
```

**13. Use generic in the return value of the function**

```typescript
// FIXME: using generics on this function to solve the issue
function getFirstAndCombine(array:Array<any>, ele2:any){
  return array.length?[array[0], ele2]:[ele2];
}

const one = getFirstAndCombine([5], 6); // one should be number[] instead of any
const two = getFirstAndCombine([5], '6');  // Should identify this issue
```



### Type Inference

Type inference is everywhere. Understanding it is very important



**14. How are the following varables being inferred?**

```typescript
const a = 'name';
const b = 5;
const fnA = (a: {name:string})=>{
  return a.name;
}
const c = [5, 6, 7];
const d = [5, '6', 7];
```

**15. How to understand the inference of conditional types? Will this work? If not, how to fix?**

Hints: 

Type Guard  https://basarat.gitbooks.io/typescript/docs/types/typeGuard.html, 

Type Cast https://basarat.gitbooks.io/typescript/docs/types/type-assertion.html

```typescript
// Will this work?
function fancy(a:number|string){
  if(typeof a === 'number'){
    return a;
  } else {
    return a.length;
  }
}

// Will this work?
function isNumber(a:number|string){
	return typeof a === 'number';
}
function fancy(a:number|string){
  if(isNumber(a)){
    return a
  } else {
    return a.length;
  }
}

```



### Generate type from type

**16. How to reuse the return value of a function?**

```typescript
function getPeople(){
  return {
    name: 'Dan',
    age: 19
  }
}

interface People {
  name: string;
  age: number;
}

// Can I reuse the return value of getPeople() instead of writing stupid code?
function updatePeople(people:{name: string; age: number}){
  // blablabal;
}
```

**17.How to make some property of object optional instead of rewriting the whole interface?**

```typescript
// How to make `age` property optional?
interface ALargeInterface {
  name: string;
  age: number;
}
```



**18.How to get a `subtype` of a type?**

```typescript
// How to get the type of the property `name` without pain?
interface ALargeType {
  name: {
    firstName: string;
    lastName: string;
  };
  age: number;
}
```



**Read more about Utility Types**

```typescript
Partial<T>
Readonly<T>
Record<K,T>
Pick<T,K>
Omit<T,K>
Exclude<T,U>
Extract<T,U>
NonNullable<T>
ReturnType<T>
InstanceType<T>
Required<T>
ThisType<T>
```

## Answers

### Basics

**1. How is TypeScript we write understood by the browser?**



**2. What is the difference between `interface` and `type` ? What is `extends`? **



**3. What is tsconfig.json?**

Make sure you understand the important property in the following sample tsconfig.json

```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "strictNullChecks": false,
    "module": "commonjs",
    "target": "es5",
    "lib": [
      "es5",
      "es7",
      "dom",
      "es2017"
    ],
    "jsx": "react"
  },
  "include": [
    "./src/**/*"
  ],
  "exclude": [
    "node_modules"
  ]
}

```



**4. What is the type of the variable `a`, `b` and `c`**

```typescript
const a = 'help';  // String literal 'help'
let b: React.ReactNode = 'string';  // React.ReactNode, because you specify it
const c = ['a', 'b', 'c', 5]  // (string|number)[] is inferred by TypeScript compiler
```

**5. Object Type-checking: Will the following code working without errors?**

```typescript
interface Params {
  name: string;
  value: number;
}

interface Params2 {
  name: string;
  value: number;
  path: string;
}

interface Params3 {
  name: string;
  path: string;
}

function hello(param: Params){
  console.log(param.name, param.value);
}


const a: Param2 = {
  name: 'string',
  value: 5,
  path: 'workspace'
}

const b: Param3 = {
  name: 'string',
  path: 'workspace'
}

// Will TS complain about following code?
// This will work
hello({name: 'string', value: 5});

// This will work because it has all the property needed (Type compatibility)
hello({name: 'string', value: 5, path: 'workspace'});
// This will work for same reason above
hello(a);
// This will NOT work because required property value is missing
hello(b);

// Please try it in your editor yourself
```

**6. Function type-checking: Will the following code going to work?**

```typescript
const a = (name: string): void => {
  console.log(name);
};

const b: Function = (name: string) => {
  console.log(name);
};

const c = (name: string, middleName: string) => {
  console.log(name);
  console.log(middleName);
};

const d = (name: string): string => {
  console.log(name);
  return name;
};

function sayHello(sayFn: (name: string) => void) {
  sayFn('David');
}

// Will TS complain about following code?
// Please try it in your editor yourself
sayHello(a);  // Correct
sayHello(b);  // Incorrect
sayHello(c);  // Incorrect
sayHello(d);  // Correct
```



### Combination of Types

**7. AND**

```typescript
interface A {
  name: string;
}

interface B {
  age: number;
}

// How to use A and B to create a type that has both `name` and `age` as property?
type C = A & B
```

**8. OR**: How to declare a type that is either number or string

```typescript
type A = number | string;
let a: A = '5';
a = 5;
```



### Type Inference

**9. Functions inference: What will be inferred**

```typescript
function add(a, b){
  return a + b;
}
add(5, 6);

function add2(a: number, b: number){
  return [a, b];
}

// Return type of add2: number[]
```



**10. Object inference: What will be inferred**

```typescript
// Object literal type {name:string, age: number} is assigned to a
const a = {
  name: 'David',
  age: 24,
}

// Will TS complain?
a.name = 'Derui';  // Work
a.age = '24'; // Does not work, '24' is not compatible with number
a.lastName = 'Deng';  // Does not work, lastName does exist in literal type {name:string, age:number}
```



### Generics

Generics knowledge is very important when you are dealing with 3rd party library like react, redux, lodash.

**11. What is generics in TypeScript?**

Read this

http://www.typescriptlang.org/docs/handbook/generics.html

**12. Use generic in the param of the function**

```typescript
// Generics T is used
function getFirstElement<T>(array: Array<T>): T {
  return array.length ? array[0] : null;
}

const one = getFirstElement([5]); // one is implicit `any`
one.split('5');  // TS will now find this issue
const two = getFirstElement(['5']); // two is also `any`
two.split(''); // This is working
```

**13. Use generic in the return value of the function**

```typescript
function getFirstAndCombine<T>(array:T[], ele2:T){
  return array.length?[array[0], ele2]:[ele2];
}

const one = getFirstAndCombine([5], 6); // one should be number[] instead of any
const two = getFirstAndCombine([5], '6');  // Should identify this issue
```



### Type Inference

Type inference is everywhere. Understanding it is very important



**14. How are the following varables being inferred?**

```typescript
const a = 'name'; // string literal 'name'
const b = 5; // number literal 5
// Return string
const fnA = (a: {name:string})=>{
  return a.name;
}
// number[]
const c = [5, 6, 7];
// (number|string)[]
const d = [5, '6', 7];
```

**15. How to understand the inference of conditional types? Will this work? If not, how to fix?**

Hints: Type Guard, Type Cast

```typescript
// Will this work?
// The answer is YES!
function fancy(a:number|string){
  // This is a Type Guard
  if(typeof a === 'number'){
    return a;
  } else {
    // Type of a narrowed to 'string'
    return a.length;
  }
}

// Will this work?
function isNumber(a:number|string){
	return typeof a === 'number';
}
// This will NOT work
function fancy(a:number|string){
  // TSC does not know this function is a type guard
  if(isNumber(a)){
    return a
  } else {
    return a.length;
  }
}

// Fix: add 'a is number'
function isNumber(a: number | string): a is number {
  return typeof a === 'number';
}

```



### Generate type from type

**16. How to reuse the return value of a function?**

```typescript
function getPeople(){
  return {
    name: 'Dan',
    age: 19
  }
}

interface People {
  name: string;
  age: number;
}

// Can I reuse the return value of getPeople() instead of writing stupid code? 
// Yes, use ReturnType<>
function updatePeople(people: ReturnType<typeof getPeople>) {
  // blablabal;
}
```

**17.How to make some property of object optional instead of rewriting the whole interface?**

```typescript
// How to make `age` property optional?
interface ALargeInterface {
  name: string;
  age: number;
}

type B = Partial<ALargeInterface>
```



**18.How to get a `subtype` of a type?**

```typescript
// How to get the type of the property `name` without pain?
interface ALargeType {
  name: {
    firstName: string;
    lastName: string;
  };
  age: number;
}

// Simple
type B = ALargeType['name'];
```



**Read more about Utility Types**

```typescript
Partial<T>
Readonly<T>
Record<K,T>
Pick<T,K>
Omit<T,K>
Exclude<T,U>
Extract<T,U>
NonNullable<T>
ReturnType<T>
InstanceType<T>
Required<T>
ThisType<T>
```


