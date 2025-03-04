import React, { useState } from 'react';
import { create } from 'zustand';

// zustand(독일어: 상태) 패키지 :
// - React에서 사용할 수 있는 *상태 관리* 패키지 중 하나
// - 상태 관리 패키지 중 과거에는 Redux 패키지가 가장 많이 사용되었지만 현재는 zustand로 이동 중
// - Redux는 복잡한 코드 구조 및 높은 학습 곡선을 가지고 있음 (이러한 단점으로 최근에는 zustand로 이동 중)
// - zustand는 단순한 코드 구조 및 낮은 학습 곡선을 가지고 있음
// - 또한 Redux, MobX와 같은 타 상태 관리 패키지에 비해 가벼움, 따라서 빌드 시 패키징 속도가 굉장히 빠름 / 빌드가 끝났을 시 번들의 크기가 줄어듬

// npm install zustand

// zustand를 이용한 전역 상태 선언 방법
// - zustand 패키지 내부의 create 함수로 store를 생성할 수 있음
// - store : 관리할 상태들과 각 상태의 변경 함수들의 집합
// - create 함수를 호출하면 store를 반환하는 훅 함수를 반환

const useStore = create();

export default function Zustand() {

  const [state1, setState1] = useState<number>(0);
  
  const onChangeHandler = () => {
    setState1(state1 + 1);
  };

  return (
    <div style={{ margin: '40px', padding: '40px', border: '1px solid gray' }}>
      <B state1={state1} />
      <C state1={state1} onChange={onChangeHandler} />
    </div>
  )
}

interface BProp {
  state1: number;
}

function B({ state1 }: BProp) {

  return (
    <div style={{ margin: '40px', padding: '40px', border: '1px solid gray' }}>
      <h1>{state1}</h1>
    </div>
  )
}

interface CProp{
  state1: number;
  onChange: () => void;
}

function C(prop: CProp) {
  
  return (
    <div style={{ margin: '40px', padding: '40px', border: '1px solid gray' }}>
      <D {...prop}/>
      <E />
    </div>
  )
}

interface DProp {
  state1: number;
  onChange: () => void;
}

function D({ state1, onChange }: DProp) {

  return(
    <div style={{ margin: '40px', padding: '40px', border: '1px solid gray' }}>
      <h1>{state1}</h1>
      <button onClick={onChange}>증가</button>
    </div>
  )
}

function E() {

  return (
    <div style={{ margin: '40px', padding: '40px', border: '1px solid gray' }}>
      <h1>E 컴포넌트</h1>
    </div>
  )
}