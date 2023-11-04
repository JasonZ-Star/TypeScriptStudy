// 剩余参数
function fn(x: string, y: string, ...rest: number[]) {
    console.log(x, y, rest);
}
fn('a', 'b', 1, 2, 3);

// 函数重载，函数名相同，参数不同的多个参数，实现数字相加，字符串拼接
function newAdd(x: string, y: string): string;
function newAdd(x: number, y: number): number;

// 函数实现
function newAdd(arg1: string | number, arg2: string | number): string | number{
    if(typeof arg1 === 'string' || typeof arg2 === 'string'){
        return `${arg1} ${arg2}`;
    }
    return arg1 + arg2;
}


console.log(newAdd('a', 'b'));
console.log(newAdd(1, 2));

