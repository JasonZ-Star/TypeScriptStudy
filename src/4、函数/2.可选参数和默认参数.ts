// 第二个参数可选，可有可无
// 必选参数不能位于可选参数？后
let getName = function(firstName: string, lastName?:string){
    return firstName + lastName;
}
getName('zhang', 'san');
console.log(getName('Li'));
