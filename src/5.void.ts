// void类型
// 1. void类型的变量只能赋值为undefined和null
// 2. void类型的变量不能赋值为其他类型，用于表示没有任何类型返回值的函数
function myPrint(): void {
    console.log('Hello TypeScript');
}
console.log(myPrint());

let v: void = undefined;
v = null;
console.log(v);