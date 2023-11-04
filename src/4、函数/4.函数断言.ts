// 定义一个函数，获取到一个数字或者字符串的长度
// 类型断言：可以手动去指定一个值的类型
// 2种语法
// 1. 变量 as 类型
// 2. 类型<变量>
function getLength(x: string | number):number {
    if((x as string).length){
        return (<string>x).length;
    }
    else{
        return x.toString().length;
    }
}

// 将任何一个类型断言为any，any类型允许访问任意属性和方法
// 原则上尽量不要使用
// 一方面不要滥用，另一方面也不要完全否定它的作用
(window as any).foo = 1; // 给window对象添加了一个foo属性，值为1

// 将any断言为一个具体的类型
function addwhatever(arg1: any, arg2: any): any{
    return arg1 + arg2;
}
let addwhatever1 = addwhatever(1, 2) as number;// a --> 数值类型
let addwhatever2 = addwhatever('a', 'b') as string;// b --> 字符串类型