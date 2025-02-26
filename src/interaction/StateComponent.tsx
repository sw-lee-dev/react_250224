import React, { ChangeEvent, KeyboardEvent, useState } from 'react'

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
  const [total, setTotal] = useState<number>(0);

  const [array, setArray] = useState<number[]>([]);

  const [comment, setComment] = useState<string>('');

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

  const onStateClickHandler = () => {
    // 상태 변경 함수를 사용해서 상태를 변경하더라도 바로 변경되지 않음
    // 함수가 끝나고 렌더링 되는 시점에 적용됨
    // console.log(count);  // 0
    // setCount(count + 1); // 1(기억 공간)
    // console.log(count);  // 0
    // setCount(count + 1); // 1
    // console.log(count);  // 0
    // setCount(count + 1); // 1
    // console.log(count);  // 0
    // console.log('------------');

    // let nextCount = count + 1;
    // setCount(nextCount);
    // nextCount += 1;
    // setCount(nextCount);
    // nextCount += 1;
    // setCount(nextCount);

    // 자기자신을 여러번 변경할 때
    // 상태 변경 함수에 콜백 함수를 전달하면 해당 콜백 함수를 누적시켜서 실행시킴
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const onSumHandler = () => {
    // setCount(count + 1);
    // setTotal(total + count); 동작이 하나씩 느리게 작동됨

    const nextCount = count + 1;
    setCount(nextCount);
    const nextTotal = total + nextCount;
    setTotal(nextTotal);
  };

  const onArrayAddHandler = () => {
    // const nextCount = count + 1;
    // setCount(nextCount);
    const newArray = [...array, 1]; // 주소를 바꿔줘서 변경이 일어나게 만듦, 객체 타입도 동일하게 가능
    setArray(newArray);
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setComment(value);
  };

  const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;
    if (key !== 'Enter') return;
    onSubmitHandler();
  };

  const onSubmitHandler = () => {
    alert('전송!');
  };

  return (
    <div>
      <h2>일반변수 : {letCount}</h2>
      <h2>상태변수 : {count}</h2>
      <h2>let 상태변수 : {num}</h2>
      <h2>total : {total}</h2>
      <button onClick={onClickHandler}>증가</button>
      <button onClick={onStateClickHandler}>버튼</button>
      <button onClick={onSumHandler}>더하기</button>
      <div>
        {array.join(', ')} / 길이 : {array.length}
        <button onClick={onArrayAddHandler}>추가</button>
      </div>
      <p>{comment}</p>
      <input value={comment} onChange={onChangeHandler} />

      <div style={{margin: '40px', padding: '40px', border: '1px solid gray'}}>
        <input value={comment} onChange={onChangeHandler} onKeyDown={onKeyDownHandler} />
        <button onClick={onSubmitHandler}>전송</button>
      </div>
    </div>
  )
}
