const car = { type:"touota",model:"inova",colour:"jet black"}
console.log(car);
console.log();
//creating an empty object and adding elements in it
const person = {};
person.firstname="Abhijeet";
person.car="fortuner";
person.gf="kashak";
person.age="20";
console.log(person)
console.log(person["gf"])
delete person.age;
console.log(person)
