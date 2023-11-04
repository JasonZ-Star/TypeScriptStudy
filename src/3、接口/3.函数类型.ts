// 参数，返回值
interface ISearchFunc{
    (source: string,substring: string): boolean;
}
const mySearchFunc: ISearchFunc = function(a: string,b: string): boolean{
    return a.search(b) !== -1;
}

console.log(mySearchFunc('abc','a'));
