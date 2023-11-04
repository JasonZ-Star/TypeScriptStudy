// ts函数声明，命名函数
// a，b为参数，都为number类型，返回值类型也为number
function add(x: number, y: number): number {
    return x + y;
}

// 函数表达式，匿名函数
let myAdd = function(x: number, y: number): number {
    return x + y;
}

// ts函数的完整写法
let myFullAdd: (x:number, y:number) => number = function(x: number, y: number): number {
    return x + y;
}