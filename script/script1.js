const con = document.getElementById('container')
const item = document.getElementsByClassName('item')
//-------------------------------------------------------------------------
console.log(con)
console.log(item[0])
console.log(typeof item[1].innerHTML)
console.log(item[1].innerHTML.length)
console.log(item[2])
console.log(item[3])

let a = 10
let b = '20'
let c = 20
console.log(a+b)
console.log(a+c)
//-------------------------------------------------------------------------

let num = window.prompt('좋아하는 숫자를 입력하세요')//데이터저장변수
//num이라는 이름에 프롬포트를 사용하여 입력받은 숫자를 저장한다.
let total = Number(num)//데이터변환변수
// total을 이용하여 num의 값을 숫자로 변환한다.
/* console.log(typeof number, typeof total) */
console.log(total, num)
console.log(typeof total)