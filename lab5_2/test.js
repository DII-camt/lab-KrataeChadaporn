// โปรแกรม A1
const vehicles = ['mustang', 'f-150', 'expedition'];
const [a , ,b] = vehicles; 
console.log(a); // ผลลัพธ์ที่ได้คือ 'mustang'
console.log(b); // ผลลัพธ์ที่ได้คือ 'expedition'

// โปรแกรม A2
const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red'
};
console.log(vehicleOne.color); // ผลลัพธ์ที่ได้คือ 'red'
console.log(vehicleOne["color"]); // ผลลัพธ์ที่ได้คือ 'red'
console.log(vehicleOne["color "]); // ผลลัพธ์ที่ได้คือ undefined (ช่องว่างใน key)

// โปรแกรม A3
const vehicleOne2 = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red'
};
const { type, color, brand, model } = vehicleOne;
console.log(type); // ผลลัพธ์ที่ได้คือ 'car'
console.log(color); // ผลลัพธ์ที่ได้คือ 'red'
console.log(brand); // ผลลัพธ์ที่ได้คือ 'Ford'
console.log(model); // ผลลัพธ์ที่ได้คือ 'Mustang'

// โปรแกรม A4
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.pop()); // ผลลัพธ์ที่ได้คือ 'Mango'
