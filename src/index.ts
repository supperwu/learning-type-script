let count = 1;
console.log(`Hello, world! ${count}`);

let v1: void = undefined;
//let v2:void = null;  //error: Type 'null' is not assignable to type 'void'

let userName: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${userName}.

I'll be ${age + 1} years old next month.`;
console.log(sentence);

//数组
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];  //使用数组泛型

list = list2 = list2.concat(4);
console.log(list);

// 元组 Tuple
let tuple: [string, number];
tuple = ['hello', 10]; // OK
tuple = ['hello', 11];
// tuple = [10, 'hello']; // Error: Type 'number' is not assignable to type 'string'.
console.log(tuple[0].substring(1)); // OK
console.log(tuple[1]);

tuple[1] = 12;
console.log(tuple[1]);

// tuple[3] = 'world';

//枚举
enum Color {
    Red,
    Green,
    Blue
}
const c: Color = Color.Green;
console.log(c);
console.log(Color[c]);

