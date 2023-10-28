// 表示取值可以从多种类型中取值
// 1.联合类型使用 | 分隔每个类型
let f: boolean | number = true;
f = 1;
// 2.访问联合类型的属性或方法
// 当ts不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
// 如果已经赋值，那么就会根据类型推断出一个类型，然后就只能访问这个类型的属性或方法