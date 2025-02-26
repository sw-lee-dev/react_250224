import React, { useState } from 'react'

// 상태 (state) :
// - 각 컴포넌트가 독립적으로 가지고 있는 데이터 기억 공간
// - 상태는 컴포넌트가 렌더링되는 기준이 됨
// - 상태가 변경되면 컴포넌트는 리렌더링 됨
export default function StateComponent() {

  let letCount: number = 0;
  // state 선언 방법
  // - useState hook 함수로 상태를 선언 (hook 함수는 use 키워드로 시작함)
  // const(const 권장, let 은 지양) [상태변수, 상태변경함수] = useState<상태 변수의 타입을 제너릭으로 전달함>(매개변수로는 초기(화)값);
  const [count, setCount] = useState<number>(0);
  let [num, setNum] = useState<number>(0);

  const onClickHandler = () => {
    letCount++;
    console.log(letCount);
    setCount(count + 1);
    console.log(count);

    // 상태 변수는 반드시 상태 변경 함수를 이용해서 변경해야 변경값이 적용됨
    // 직접 바꾸게 되면 일반 변수와 동일하게 취급을 함
    num++;
    console.log(num);
    console.log('---------');
  };

  return (
    <div>
      <h2>일반변수 : {letCount}</h2>
      <h2>상태변수 : {count}</h2>
      <h2>let 상태변수 : {num}</h2>
      <button onClick={onClickHandler}>증가</button>
    </div>
  )
}
