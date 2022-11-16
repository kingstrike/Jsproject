//ESNext에서 추가되거나, 변경된 문법 4
/**
 * 자료구조에서 정보 추출 방법
 *  -자료구조 : 객체 {}, 배열 []
 * -Destructuring assigment
 * 
 * 객체 리터럴(타입 1번)의 기능 확장
 * 스프레드 연산자 ( ... )
 */

// 객체 내에서 정보 추출 -> 객체 구조 분해
let data = {
    s1:'서면역',
    s2:'부전역',
    s3:'부산역',
    s4:['사상역','벡스코','동래역']
} 
console.log(data)
//값 추출
console.log(data.s2)
//객체 구조 분해, 데이터는 다 전달받았는데 그중 일부만 사용하고 싶다.
//s2:bu => 변수명을 변경하고 싶다면 
let {s2,s3} = data //data객체에서 s2/s3와 일치하는 멤버값을 추출 
//맴버로 없는 이름을 사용할경우 => 변수는 생기나 값은 undefined
console.log(`s3=> ${s3}`,s5,s4,bu)

// 추출한 변수값을 수정하면 원본에 영향을 받는가?
s3 = '변경' //원본에 영향을 미치지 않는다. =>사본이다
console.log(s3,data)


// =====================================================
// 배열(순서가 존재, 인덱스(0,1,2...)) 구조 분해
// ['사상역'.'백스코','센텀시티역']
console.log(s4,s4[0])
//쓰고 싶은 변수명을 사용하여 추출 -> 순서가 중요
//추출안하는 자리는 ,로 대체 활용 빈도가 높진 않다.             
let [,,city] = s4
console.log(city)

//-----------------------------------
//객체 리터럴의 표현 확장
let w1 = 90
let age1 = 100
const gewW = () => {
    console.log=('h1')
}
//전역변수의 값(변수들)들을 객체 생성시 데이터로 사용 가능
let obj = {
    w:w1,
    age:age1
}

let obj2 = {
    w1,
    age1,
    getW, // 맴버 함수
    //함수를 직접 맴버로 넣는다면
    info () {}
}
console.log(obj.w,obj1.w1)
obj2.getW()
obj2.info()

// =================================================
// 스프레드 연산자(...변수)
var a1 = ['콜라','물','사이다']
var a2 = ['밥','햄버거']

console.log(a1)
console.log(...a1) // 값들이 모두 추출된다. -> 카피(얕은,깊은)

//a1 배열과 a2 배열을 합치고, '김치'라는 값까지 합쳐서 세로운 배열을 만드시오
//결과물 =>[a1 배열의 맴버, a2 배열의 맴버, '김치'] 
var a3 = [...a1, ...a2, '김치']
console.log(a3)

//객체 copy
const obj10 = {
    a:10,
    b:20
}
const obj11 = {
    a:11,
    c:30
}
//여러 객체를 카피해서 새로운 객체를 만들떄, 중복되는 값이 있다면 뒤에것으로 대체된다. 
console.log( {...obj10, ...obj11})

//함수 인지도 활용 => 가변인자
function test(...args) {
    console.log(args)
//배열 구조 분햬+스프레드 연산(나머지 모두다 카피)
    var[d1,...remain] = args
    // d1=>'콜라', remain=>['물','사이다]
    console.log('->', d1,remain)
    var[d2, ...end] = remain.reverse()
    // d2=>'사이다',end=>['물'], remain=>['사이다','물']
    console.log('->', d2,end,remain)
}
test('콜라','물','사이다')
test('콜라','물','사이다',10,11,12)

// 객체 구조분해를 함수의 인자로 표현
function test2 ( [s1,,]) {
    console.log(s1)
}
test3(a1)