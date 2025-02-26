import React, { ChangeEvent, KeyboardEvent, MouseEvent } from 'react'

// 이벤트 처리 :
// - 웹 페이지(컴포넌트)가 사용자와의 상호작용을 받아드려 그것에 대해 처리하는 것 (어떻게 응답할지)
// - React에서는 addEventListener 함수를 사용하지 않고 인라인 방식을 사용
// - 인라인에 이벤트 핸들러 속성은 전부 lowerCamelCase를 따름
// - 이벤트 핸들러에는 콜백 함수를 전달

export default function EventComponent() {

  // onClick : 클릭이 발생했을 때
  // onKeyDown : 키보드를 눌렀을 때
  // onChange : 요소의 값을 변경했을 때
  const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    /**매개변수로 이벤트 정보를 담고 있는 객체를 받을 수 있음, 이벤트 객체에는 이벤트를 일으키는 대상에 대한 타입이 설정되어 있고 제네릭으로 요소를 받아줘야 함*/
    alert('클릭!');
  };

  const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;
    alert(`누른 키 : ${key}`);
  };

  // onChange는 HTML에서의 oninput + onchange를 합쳐놓은 것
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    alert(`입력한 내용 : ${value}`);
  };

  const employees = [
    {
      name: '홍길동',
      employeeNumber: '202501'
    },
    {
      name: '이영희',
      employeeNumber: '202502'
    }
  ];

  // 이벤트 처리 콜백 함수로 매개변수가 event만 받는 형태가 아니라면 (혹은 아무것도 안받거나)
  // 직접적으로 함수를 전달하여 사용할 수 없음
  // 이때는 해당 이벤트 속성에 직접 익명 함수 표현식을 사용하여 전달( onClick={() => onEmployeeNameClickHandler(employee.employeeNumber)} )
  const onEmployeeNameClickHandler = (employeeNumber: string) => {
    alert(`사원번호 : ${employeeNumber}`);
  };

  let count = 0;
  const onIncreaseHandler = () => {
    count++;
    alert(count);
  };

  return (
    <div>
      <button onClick={onClickHandler}>클릭</button>
      <input placeholder='키보드' onKeyDown={onKeyDownHandler} />
      <input placeholder='변경' onChange={onChangeHandler} />
      <div>
        {employees.map((employee, index) => (
        <div key={index}>
          <h2 onClick={() => onEmployeeNameClickHandler(employee.employeeNumber)}>{employee.name}</h2>
        </div>
        ))}
      </div>
      <div>
        {count} <button onClick={onIncreaseHandler}>증가</button>
      </div>
    </div>
  )
}
