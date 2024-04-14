function parameters(a: unknown) {
    console.log(`Kiểu dữ liệu là : ${typeof a}`);
    return a;
}

console.log(parameters(32));
console.log(parameters("ninh anh"));
console.log(parameters(null));
console.log(parameters(false));
console.log(parameters(undefined));



