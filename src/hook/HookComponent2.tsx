import React, { useRef, useState } from 'react'

export default function HookComponent2() {

  // useRef :
  // - 렌더링 작업 없이 값을 기억하고 변경하고자 할 때 사용
  // - DOM 요소를 참조하기 위해 자주 사용
  // - const 변수(일반적으로 상수값) = useRef<타입>(초기값);

  let number = 0;
  const [state, setState] = useState<number>(0);
  const ref = useRef<number>(0);
  
  const onClick = () => {
    setState(state + 1);
  };
  
  const onVar = () => {
    number++;
    console.log(number);
  };

  const onRef = () => {
    ref.current++;
    console.log(ref.current);
  };

  return (
    <div>
      <h1>일반 변수 : {number}</h1>
      <h1>상태 변수 : {state}</h1>
      <h1>참조 변수 : {ref.current}</h1>
      <button onClick={onVar}>일반 증가!</button>
      <button onClick={onClick}>클릭!</button>
      <button onClick={onRef}>Ref 증가!</button>
    </div>
  )
}
