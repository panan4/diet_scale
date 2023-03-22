//원시데이터(논리형 데이터 true(1), false(0))

let a = false
let b = 0
console.log(a==b)
//원시데이터(null(비어있다,제거한다.), undefined(정의되지않았다.))
let c = 10
let d
c = null
let e = 10
let f = '0'
console.log(c)
console.log(d)
console.log(e+f)
//----------------------------------------------------------------------
console.log('----------------------------------------------------------')
//산술연산자
let num1 = 10+20
let num2 = 10-20
let num3 = 10*20
let num4 = 10/20
let num5 = 10%3
console.log(num1, num2, num3, num4, num5)
let num6 = 1
num6 += 10
console.log(num6)
let box2 = 0
box2 = box2+10 // box2 += 10
console.log(box2) //10
box2 = box2-5 // box2 -= 5
console.log(box2) //5
box2 = box2*2 //box2 *= 2
console.log(box2) //10
/* box2 += '살 입니다.'
window.alert(box2) */
console.log('----------------------------------------------------------')
let box3 = 10
console.log(box3)
/* console.log(box3++)
console.log(++box3) */
/* box3++
console.log(box3) */
let box4 = box3++
console.log(box4, box3)