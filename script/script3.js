let num1 = 10;
let num2 = 20;
let result;
num1--;
console.log(num1); //9
num1++;
console.log(num1); //10
result=num2++;
console.log(result); //20
result=++num2; 
console.log(result); //22
result += ++num2 // 22+(1+22)
console.log(result)
console.log('----------------------------------------------------------')
/* let age = window.prompt('당신의 나이는 ?')
console.log('올해 당신의 나이는 '+age+'살 입니다.')
age++;
console.log('내년 당신의 나이는 '+age+'살 입니다.') */
/* let age = window.prompt('당신은 몇년생 입니까?')
age = 2023-age;
console.log('당신의 만 나이는 '+age+'살 입니다.')
console.log('당신의 나이는 '+(++age)+'살 입니다.')

//템플릿 문자열

console.log(`내년 당신의 나이는 ${++age}살입니다.`) */

let dan99 = window.prompt(`구구단 몇단이 궁금해요?`)

console.log(`${dan99}X1=${dan99*1}`)
console.log(`${dan99}X2=${dan99*2}`)
console.log(`${dan99}X3=${dan99*3}`)
console.log(`${dan99}X4=${dan99*4}`)
console.log(`${dan99}X5=${dan99*5}`)
console.log(`${dan99}X6=${dan99*6}`)
console.log(`${dan99}X7=${dan99*7}`)
console.log(`${dan99}X8=${dan99*8}`)
console.log(`${dan99}X9=${dan99*9}`)
