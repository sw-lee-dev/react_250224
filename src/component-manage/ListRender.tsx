import React from 'react'

// 리스트 렌더링:
// - JSX 내부에서 배열을 반복하여 렌더링 하는 방법
// - JSX 내부에서는 for문, while문 같은 반복문을 사용할 수 없음
// - 리스트의 각종 고차 함수를 사용

export default function ListRender() {

  const fruitArray = ['apple', 'banana', 'cacao'];

  // map을 이용하여 렌더링
  const fruitArrayItems = fruitArray.map((fruit, index) => <h3 key={index}>{fruit}</h3>);

  // filter를 이용한 렌더링
  const filteredItems = fruitArray.filter((fruit, index) => index % 2 === 0);
  const filteredArrayItems = filteredItems.map((fruit, index) => <h3 key={index}>{fruit}</h3>);

  // 리스트를 반복하며 렌더링 할 땐 요소의 시작 태그에 key 속성(절대로 중복되지 않을 값)을 지정해야함
  // key 속성의 역할 : 반복되는 요소에 대해 고유성을 부여해줌 (렌더링 시 위치를 기억하게 해줌)

  return (
    <div>
      {fruitArray}
      {fruitArray.map((fruit, index) => <h3 key={index}>{fruit}</h3>)}
      {fruitArrayItems}

      {fruitArray.filter((fruit, index) => index % 2 === 0)}
      {fruitArray.filter((fruit, index) => index % 2 === 0).map((fruit, index) => <h3 key={index}>{fruit}</h3>)}
      {filteredArrayItems}

      {new Array(10).fill(0).map((_/*_(사용하지 않겠다) 또는 $(아직 명명하지 않았다)*/, index) => <h3 key={index}>반복 하는 요소!!!!</h3>)}
    </div>
  )
}
