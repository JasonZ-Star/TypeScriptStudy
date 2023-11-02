// absctract shape to constrains the class
// define a interface
interface IPerson {
    name: string,
    age: number,
    sex?: string, // optional
    [protName: string]: any // dynamic property
}
let p: IPerson ={
    name: 'zhangsan',
    age: 18,
    sex: "male",// optional
    weight: "hehe" // dynamic property
};
