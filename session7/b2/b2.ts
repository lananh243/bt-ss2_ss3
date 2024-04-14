let array:number[] = [1,7,2,3,4,5,8,9];
let check = array.filter((item,index,arr) => {
    return item > 2 && item < 5
});
console.log("Kết quả là :", check);
