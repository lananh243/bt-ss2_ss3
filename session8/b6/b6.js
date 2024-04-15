"use strict";
function arrayOrString(a) {
    if (typeof a === 'string') {
        return a;
    }
    else {
        for (let element of a) {
            console.log(element);
        }
        return a;
    }
}
console.log(arrayOrString("lê bình"));
arrayOrString(["10", "20", "5", "4"]);
