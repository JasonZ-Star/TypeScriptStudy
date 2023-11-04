// 数组是合并了相同类型的对象
let array:number[] = [1,2,3];
// 元组（Tuple）合并了不同类型的对象
let Tuple:[number,string] = [123, "Hello"];
// 元组添加的内容，需要是对应的类型，如果不是对应的类型，会报错
Tuple.push(456);
Tuple.push("World")
// Tuple.push(true); // 报错