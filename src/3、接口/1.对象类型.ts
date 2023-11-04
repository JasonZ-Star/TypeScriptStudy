// absctract shape to constrains the class
// define a interface
// 任意属性一旦定义，确定属性和可选属性都必须是它的子属性
// 如果需要多属性，可以使用联合类型
interface IPerson {
    readonly id: number,
    name: string,
    age: number,
    sex?: string, // optional 可有可无
    [protName: string]: string | number // dynamic property
}
let p: IPerson ={
    id : 1314520, // 只能在创建的时候赋值
    name: 'zhangsan',
    age: 18,
    sex: "male",// optional
    weight: "hehe" // dynamic property
};