// 类型推断，两种情况
// 1.ts在没有明确的指定类型的时候推测出一个类型，这就是类型推断
// 2.定义的时候没有赋值，那么就会推断为any类型
// a已经被推断成了number类型，所以不能赋值为其他类型
let a = 1;

// anyType没有赋值，所以被推断成了any类型
let anyType;
anyType = 1;
anyType = 'str';
anyType = true;
anyType = [];
anyType = {};
