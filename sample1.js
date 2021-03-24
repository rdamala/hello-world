//console.log('test console log statements');
//console.warn('message');
//console.error('ravi this is error');

const numbers = new Array(1, 2,3,4,5);
numbers[5]=6;
console.log(numbers);

const fruits = ['mango','grape','banana','pears'];
console.log(fruits);
console.log(Array.isArray(fruits));
fruits.push('test');
fruits.unshift('first');

//fruits.pop();
console.log(fruits.length);

const person = {
    fname: 'Ravi',
    lName: 'Kumar',
    age: 38,
    hobbies: ['play','tv','reading'],
    address: {
        street: 45,
        line: 'sagebrush',
        city: 'Boston'
    }
}

console.log(person);
person.email = 'rd@MediaList.com';
