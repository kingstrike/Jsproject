/**
 * OPtional chaining
 * -?.
 * -??
 * - 널 세이프 개념이 도입
 */
const A = {
    name:'AA',
    proc:{
        id:'coding',
        msg:{
            code:'2001'
        }
    }
}
const B = {
    name : 'AA'
}
console.log(A.proc?.msg?.code) 
console.log(B.proc?.msg?.code) //undifined를 리턴할뿐 s/w가 적상적 작동
console.log(B.proc.msg?.code)   //s/w 셧다운

/**
 * Nullish Coalescing Operator
 * -??
 * -조건식에서 사용 
 */
// A&&B, A || B
// 값대 값으로 가는 경우 조건식으로 처리(true/false)가 안된다.
console.log('AA' || 'hi') // AA
console.log(null || 'hi')
//null, '', 0,undefined => 조건식에서 false로 간주
console.log(null || 'hi')
console.log('' || 'hi') // ''
console.log(0 || 'hi') // 0를 원하는데 hi가 나온다.
//조건식으로 보지 않고 실제적인 비교 연산으로 보고 싶다면 => ?? 
console.log(0 ?? 'hi')

