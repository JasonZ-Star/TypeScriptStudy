// 基础数据类型

// 布尔值
let flag: boolean, number = true

// 数字
let num1: number = 123 // 十进制
let num2: number = 0b00000111 // 二进制
let num3: number = 0o123 // 八进制
let num4: number = 0x123 // 十六进制

// 字符串
let str: string = "Hello TypeScript"

// undefined 和 null
let und: undefined = undefined
let nul: null = null
// undefined可以作为其他类型的子类型
num4 = undefined
console.log(num4)