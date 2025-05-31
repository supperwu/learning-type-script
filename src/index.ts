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


//Any

const notSureList: any[] = [4, true, 'free'];
console.log(notSureList[0].toFixed());

const notSureList2: unknown[] = [4, true, 'free'];
if (typeof notSureList2[0] === 'number') {
    console.log(notSureList2[0].toFixed());
}


//Void 常用于函数返回类型
function logMessage(message: string): void {
    console.log(message);
}

//当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自
let u: undefined = undefined;
// u = logMessage('a');

// let n: null = undefined;  //error undefined 不能赋值给null
let n: null = null;

//可以使用联合类型string | null | undefined
let uniontype: string | null | undefined;
uniontype = '1';
uniontype = null;
uniontype = undefined;
console.log(uniontype);

//object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
let o: object = [];
let o1: object = () => 123;

//never 在需要明确表示“函数永远不会有返回值”的场景下非常有用
function throwError(message: string): never {
    throw new Error(message);
}


//类型断言
let someValue: any = 'this is a string';
//“尖括号”语法
let len = (<string>someValue).length;
//as语法
len = (someValue as string).length;
console.log(len);


