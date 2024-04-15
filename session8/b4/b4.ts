function unionTypes(param:number | number[]) {
    if (typeof param === 'number') {
        return param * 2
    }else{
        return param.map(item => item * 2);
    }
    
}
console.log(unionTypes(8));
console.log(unionTypes([2,4,5,6,7]));

 