//계산식) 적정체중 = (본인신장-100)*0.9
//변수명 예) userHeight, userWeight, normal_w
const height = document.getElementsByClassName('height')
const weight = document.getElementsByClassName('weight')
const normal = document.getElementsByClassName('normal')
const weight2 = document.getElementsByClassName('weight2')
let userHeight = window.prompt('당신의 키는?')
let userWeight = window.prompt('당신의 몸무게는?')

height[0].innerHTML = userHeight
weight[0].innerHTML = userWeight
console.log(`현재 키는 : ${userHeight}CM`)
console.log(`현재 몸무게는 : ${userWeight}KG`)
userHeight = userHeight-100
console.log(`목표 몸무게는 : ${userHeight*0.9}KG`)
let normal_w = userHeight*0.9
normal[0].innerHTML = normal_w
console.log(`최종 감량해야할 몸무게는 : ${userWeight-normal_w}KG`)
userWeight = userWeight-normal_w
weight2[0].innerHTML = userWeight

