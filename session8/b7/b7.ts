function checkDataType(a: any) {
    if(typeof a === 'number'){
        console.log("number"); 
    }else if(typeof a === 'string'){
        console.log("string");
    }else if(a === null){
        console.log("null");
    }else if(a === undefined){
        console.log("undefined");
    }else if(typeof a === 'object'){
        console.log("Object");
    }else if(a === true){
        console.log("boolean");
    }
}
checkDataType(10);
checkDataType("lan nhi");
checkDataType(null);
checkDataType(undefined);
checkDataType({name:'phan', job: 'Giáo viên', age: 25});
checkDataType(true);
