type Circle = {
    type: 'circle',
    radius: number
}
type Square = {
    type: 'square',
    sideLength: number
}

type Geometry = Circle | Square;
function calculateArea(geometry: Geometry): number {
    if (geometry.type === 'square') {
        return geometry.sideLength * geometry.sideLength;
    } else if (geometry.type === 'circle') {
        return Math.PI * geometry.radius ** 2;
    }else{
        return 0;
    }
}

const square: Square = { type: 'square', sideLength: 8 };
console.log(calculateArea(square));

const circle: Circle = { type: 'circle', radius: 6 };
console.log(calculateArea(circle));