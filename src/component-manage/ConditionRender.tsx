import React from 'react'

// 조건부 렌더링:
// - 조건에 따라서 다르게 렌더링하는 방법
// - if문 혹은 &&(논리 연산자), ?(삼항 연산자)를 사용하는 방법이 존재

interface Prop {
  number: number;
}

// 1. if문을 이용한 조건부 반환
// - 조건에 따라서 다른 return을 주는 방법

function IfComponent({ number }:Prop) {

  // number값이 양수면 글자를 파란색으로 하여 "양수"
  // number값이 음수면 글자를 빨간색으로 하여 "음수"
  // number값이 0이면 글자를 검은색으로 하여 "영"

  if (number > 0) {
    return (
      <h1 style={{ color: 'blue' }}>양수</h1>
    )
  }

  if (number < 0) {
    return (
      <h1 style={{ color : 'red' }}>음수</h1>
    )
  }

  return (
    <h1 style={{ color: 'black' }}>영</h1>
  )
};

// 2. 삼항 연산자(? :)를 이용한 조건부 렌더링
// - return 내부에서 조건에 따라 렌더링 하고자 할 때 사용 (경우에 따라 다르게 선택하여 표시)
function ThreeComponent({ number }: Prop) {

  // if와 동일하게 표시
  // return (
  //   <h1 style={{ color: number> 0 ? 'blue' : number < 0 ? 'red' : 'black' }}>
  //     {number > 0 ? '양수' : number < 0 ? '음수' : '영'}
  //   </h1>
  // )

  return (
    <div style={{ border: '1px solid gray', margin: '12px' }}>
      {
        number > 0 ? <h1>양수</h1> : 
        number < 0 ? <h2>음수</h2> : 
        <h3>영</h3>
      }
    </div>
  )
}

// 3. 논리 연산자를 이용한 조건부 렌더링
// - return 내부에서 조건에 따라 렌더링 하고자 할 때 사용 (보여줄지 말지 선택적으로 표시)
function LogicComponent({ number }: Prop) {

  // 짝수면 "해당 값은 짝수입니다" 라는 h2 요소를 렌더링하게 함
  // return 내부의 논리 연산 결과는 true, false 값이 나오게 할 것, true 또는 false는 렌더링 되지 않음 (숫자 0, 1이 나오게 되면 웹 페이지에 표시되기 때문)
  return (
    <div style={{ border: '1px solid gray', margin: '12px' }}>
      <h1>입력받은 숫자 : {number}</h1>
      {number % 2 === 0 && <h2>해당 값은 짝수입니다.</h2>}
    </div>
  )
}

export default function ConditionRender() {
  return (
    <div>
      <IfComponent number={1} />
      <IfComponent number={-1} />
      <IfComponent number={0} />
      
      <ThreeComponent number={1} />
      <ThreeComponent number={-1} />
      <ThreeComponent number={0} />

      <LogicComponent number={1} />
      <LogicComponent number={2} />
    </div>
  )
}
