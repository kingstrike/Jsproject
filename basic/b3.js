//ESNext에서 추가되거나, 변경된 문법2
//문자열
//자바타임 : 원시(primitive)타입(8)+참조(reference)타입(1:무한대)
//문자열 : 기존방식 '....' , "..."
//신규추가 : template Literals => 새로운 기호를 도입 '(백틱)
//      여러줄표현,구조를 유지, 포멧팅가능  

//포멧팅
/*
크리스티아누 호날두(37·맨체스터 유나이티드)가 
에릭 텐 하흐(52·네덜란드) 현 맨유 사령탑과 랄프 랑닉(64·독일) 
전 맨유 감독을 공개 저격했다.
*/
const name = '호날두'
const age = '37'
const number = '7번'

//기존방식 
var t = "크리스티아누 호날두 '켑틴' " + name + "(37.맨유)이\n";
//신규방식
t = 
`$(name)크리스티아누 호날두 $(age)(37맨체스터 유나이티드)가 
에릭 텐 하흐(52·네덜란드) 현 맨유 사령탑과 랄프 랑닉(64·독일) 
전 맨유 감독을 공개 저격했다.
`

console.log(t)

//구조 유지

/*
    로그인 sql : 쿼리문
    select 
    *

    from
        userTb11
    where 
        uid='quest';
*/

let uid = 'guest'
let sql = ``
    select
    *
    from
        userTb1
    where
        uid=`$(uid)`;
console.log(sql)