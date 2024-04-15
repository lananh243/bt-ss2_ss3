"use strict";
function validatePerson(obj) {
    if (!obj || typeof obj.name !== 'string' || typeof obj.age !== 'number') {
        return false;
    }
    if (!obj.address || typeof obj.address !== 'object') {
        return false;
    }
    if (typeof obj.address.street !== 'string' ||
        typeof obj.address.country !== 'string') {
        return false;
    }
    return true;
}
const person1 = {
    name: 'mộc lan',
    age: 20,
    address: {
        street: 'nguyễn trãi',
        country: 'HN'
    }
};
console.log(validatePerson(person1));
const person2 = {
    name: 'thanh thảo',
    age: '22',
    address: {
        street: 'trần phú',
        country: 'HCM'
    }
};
console.log(validatePerson(person2));
