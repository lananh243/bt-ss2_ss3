"use strict";
function calculateArea(geometry) {
    if (geometry.type === 'square') {
        return geometry.sideLength * geometry.sideLength;
    }
    else if (geometry.type === 'circle') {
        return Math.PI * geometry.radius ** 2;
    }
    else {
        return 0;
    }
}
const square = { type: 'square', sideLength: 8 };
console.log(calculateArea(square));
const circle = { type: 'circle', radius: 6 };
console.log(calculateArea(circle));
