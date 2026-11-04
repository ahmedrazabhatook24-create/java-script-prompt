// prompt
var english = Number(prompt('enter your english marks'));
var urdu = Number(prompt('enter your urdu marks'));
var math = Number(prompt('enter your math marks'));
var chemistry = Number(prompt('enter your chemistry marks'));
var pakstudy = Number(prompt('enter your pakstudy marks'));



console.log(english, urdu, math, chemistry, pakstudy);
totalMarks = 500;
console.log('Totalmarks', totalMarks);
obtainMarks = (english + urdu + math + chemistry + pakstudy);

console.log(obtainMarks);

average = (obtainMarks * 100 / totalMarks);

console.log(average);

// var num1 = Number(prompt('enter num1'))
// // var num2 = Number(prompt('enter num2'))
// var num2 = +prompt('enter num2')
// var sum = num1,num2;
// console.log(sum);
