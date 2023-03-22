# diet_scale

    <div>
        <h1>다이어트 체중계</h1>
        
        <p>당신의 건강몸무게를 알아보세요!</p>
        
        <ul>
        
            <li>현재 키 : <span class="height"></span>cm</li>
            
            <li>현재 몸무게 : <span class="weight"></span>kg</li>
            
            <li>목표 몸무게 : <span class="normal"></span>kg</li>
            
            <li>최종 감량 몸무게 : <span class="weight2"></span>kg</li>
            
        </ul>
        
    </div>
    
body * {margin: 0 auto;}

div {width: 250px; height: 150px; background-color: beige;

border: 1px solid black; margin-top: 30px;}

div h1 {border-bottom: 1px solid black; padding: 5px;

    font-weight: 700; font-size: 1.25rem;}
    
div p {border-bottom: 1px solid black; padding: 5px;

font-size: 1.05rem;}

div ul {}

div ul li {margin: 5px;}

//계산식) 적정체중 = (본인신장-100)*0.9

//변수명 예) userHeight, userWeight, normal_w

//선언

const height = document.getElementsByClassName('height')

const weight = document.getElementsByClassName('weight')

const normal = document.getElementsByClassName('normal')

const weight2 = document.getElementsByClassName('weight2')


//입력받기

let userHeight = window.prompt('당신의 키는?')

let userWeight = window.prompt('당신의 몸무게는?')


//내용

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

