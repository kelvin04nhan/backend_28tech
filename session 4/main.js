var a = 5;
var b = 10;
var n = --a;
var m = a--;
console.log(n);
console.log(m);
var ten = "Ho va ten";
console.log(ten)

// ++a : cộng trước rồi trả gán vào a
// a++: gán a rồi cộng a lên trước
// var so1 = 0;
// var so2 = 10;
// console.log(so1 + ++so2);

// var so3 = 1;
// console.log(0 + so3++);
//vidu2
// var a = 20;
// var b = a++ - a-- + --a *3;
// console.log(b)
// a++ sẽ trả về giá trị hiện tại của a (20), sau đó tăng a lên 1 (a = 21).
// a-- sẽ trả về giá trị mới của a (21), sau đó giảm a xuống 1 (a = 20).
// --a sẽ giảm a xuống 1 trước (a = 19), rồi mới trả về giá trị của a (19).
// Cuối cùng, b được tính toán như sau: b = 20 - 21 + 19 * 3.
// Kết quả của phép tính là b = 20 - 21 + 57, tức là b = 56




//vi du 4
// toan tu gan
var num1 = 100;
var num2 = 1000;
num2 += num1;
console.log(num2)



//comparision
var num4 = 10
var character = '10'
console.log(num4 == character)

function makeSum(a, b) {
    return a + b
}

a = 929;
b = 893;

x = makeSum(a, b);
console.log(x)

// kiểu object

cars = {
    name: "Audi",
    speed: 12000,

}
console.log(cars.name)


// array
const studentList = [
    'Kelvin THanh',
    'BEN',
    'LE THANH NHAN'

]
studentList[1];
console.log(studentList[0]);

console.log(studentList);
console.log(cars);
    
