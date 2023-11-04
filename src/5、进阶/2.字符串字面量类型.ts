// 用来约束取值只能是某几个字符串中的一个
// 语法: type 类型别名 = 字符串字面量1 | 字符串字面量2 | 字符串字面量3 | ...
type foods = "dumpling" | "noodles" | "rice";
let food: foods = "dumpling";
