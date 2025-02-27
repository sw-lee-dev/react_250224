import React, { KeyboardEvent, useRef, useState } from 'react'

export default function HookComponent2() {

  // useRef :
  // - 렌더링 작업 없이 값을 기억하고 변경하고자 할 때 사용
  // - DOM 요소를 참조하기 위해 자주 사용
  // - const 변수(일반적으로 상수값) = useRef<타입>(초기값);
  // - useRef로 생성한 참조 변수의 데이터는 해당 변수의 current 속성에 들어있음 (-> ref.current)

  let number = 0;
  const [state, setState] = useState<number>(0);
  const ref = useRef<number>(0);

  // HTML DOM 요소를 참조하기 위해 useRef를 사용할 수 있음
  // 이땐, 해당 요소 시작 태그의 ref 속성에 해당 참조 변수를 지정해야함
  const secondRef = useRef<HTMLInputElement>(null);
  
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

  const onFirstKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;
    if (key !== 'Enter') return;

    // react에서는 document.getElementXXX 사용을 지양
    // - 실제 HTML이 render 되기 전 코드를 읽는다면 요소를 찾을 수 없음
    // const secondInputElement = document.getElementById('second-input');
    // secondInputElement?.focus(); => if 유효성 검사를 하는것과 동일

    // 특정 객체에서 속성 혹은 함수 호출을 실행하고자 할 때 해당 객체가 null 또는 undefined를 가질 수 있는 경우라면
    // 해당 객체에 ? 연산자를 사용하여 존재할때만 접근 및 호출할 수 있도록 함
    // 사용을 지양함 >> 따라서 호출 전 상단에서 if 문을 이용해 검증을 먼저 하는 것을 권장
    // secondRef.current?.focus(); >> current 뒤의 ? 는 '만약 존재한다면' 을 의미, 사용 지양
    if (secondRef.current) secondRef.current.focus(); // 사용 권장
  };

  return (
    <div>
      <h1>일반 변수 : {number}</h1>
      <h1>상태 변수 : {state}</h1>
      <h1>참조 변수 : {ref.current}</h1>
      <button onClick={onVar}>일반 증가!</button>
      <button onClick={onClick}>클릭!</button>
      <button onClick={onRef}>Ref 증가!</button>
      <div style={{ margin: '40px', padding: '40px', border: '1px solid gray' }}>
        <input id='first-input' onKeyDown={onFirstKeyDownHandler} />
        <input ref={secondRef} id='second-input' />
        <button>버튼</button>
      </div>
    </div>
  )
}
