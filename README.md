# State Managements

> 다양한 상태 관리 라이브러리에 대해서 알아보자.

## Intro

<details>
<summary>장문 주의 😅</summary>

프런트엔드의 리액트 생태계의 폭발적인 성장으로 컴퍼넌트 중심의 앱 개발을 기본으로 하고 있다. 그 컴퍼넌트 사이에 인터렉션을 위해서 존재하는 것이 상태(state)이고 이것을 관리하기 위한 라이브러리 역시 리액트의 성장과 맞물려 다양하게 등장하고 있다. 그렇다면 왜 상태 관리해야만 할까? 나 역시 처음 리액트를 배울 때, 기본적인 컴퍼넌트 내부의 state와 컴퍼넌트 간의 전달을 위한 props로서만 앱을 구성하였었다. 그때 당시는 그것만으로도 어느 정도 만족할만한 앱을 구현할 수 있었다. 시간이 지나면서 규모가 큰 프로젝트를 만나면서 이것만으로는 컴퍼넌트 간의 상태를 관리하는 것이 버거워짐을 느낄 수 있었다. 컴퍼넌트의 depth가 깊어짐에 따라서 자식 컴퍼넌트로 몇 번의 반복을 통해서 상태를 전달해야만 하는 불편함, 서로 다른 컴퍼넌트 간의 상태 전달을 위한 복잡한 로직, 그로 인한 디버깅의 어려움, 단순한 기능 한 개의 추가가 너무 많은 로직을 수정해야만 하는 어려움 등등 많은 부분들에서 어려움을 느꼈다. 이러한 어려움을 해소 하기 위해서 `Redux`, `MobX`, `Recoil` 등의 다양한 라이브러리들이 등장하였고, 나는 이 중에서 Redux를 사용하였다. 사실 내가 라이브러리를 선택하여 설계한 것이 아니라 이미 존재하던 프로젝트에서 개발이 진행되던 터라 어떤 상태 관리 라이브러리가 더 좋은지 혹은 더 알맞은지에 대한 이해는 없었다. 하지만 Redux을 지속해서 사용하다 보면 '굳이 기능 하나 추가에 생각보다 많은 양의 코드를 넣어야 하는 걸까' 라는 의문을 품기도 했다. 그러나 상태 관리에 대해서 Redux 외에는 아는 것이 없었기 때문에 이에 대한 판단을 할 수 없었다. 그래서 해당 프로젝틀 시작하게 되었다. 이 프로젝트는 대단히 거창한 것은 아니다. 유명한 상태 관리 라이브러리에 대해서 알아보고, 이해하기 쉬운 간단한 미니 프로젝트(?)를 통해서 **각각의 장단을 이해해보는 시간**을 가질 것이다. 이러한 다양한 경험은 **적합한 라이브러리 선택의 기준**을 마련해 줄 수 있을 것이며, 나아가 다양하고 복잡한 상태 관리 라이브러리, 프런트엔드의 세계에서 `나만의 판단`을 만드는 좋은 밑거름이 되리라 생각한다.

</details>

## Redux

> 리덕스의 전체적인 흐름을 다이어그램으로 알아보자 🚀

![redux-flow](./screenshots/redux_flow.png)

전체적인 흐름을 단계별로 이해해보자. 특정 컴퍼넌트의 상태를 변경시키는 과정이라고 가정해보자.

- 리덕스에서 상태를 변경시키기 위한 유일한 방법은 액션을 보내는 것이다. 그래서 컴퍼넌트에서 특정 상태에 대한 타입을 설정한 액션을 디스패치를 통해서 스토어로 보낸다. 즉, 디스패치는 상태 변화를 시작하는 트리거 역할을 한다.

- 스토어에서는 전달된 액션에 따라서 리듀서가 새로운 상태를 업데이트 한다.

- 컴퍼넌트는 서브스크라이브(이하 '구독')을 통해서 스토어의 상태변화를 감지할 수 있다. 만약 상태 변화가 일어난다면, 구독하고 있는 컴퍼넌트에서 새로운 상태를 반영하여 리랜더링이 이루어진다.

  > 구독의 과정을 좀 더 자세히 설명하면, 구독 함수는 리스너를 인자로 갖을 수 있다. 이 리스너 안에서는 스토어의 상태에 대해서 접근할 수 있다. 또한 리스너는 상태 변화가 생겼을 때 호출된다. 그렇기 때문에 리스너 안에는 상태 변화가 일어났을 때의 로직이 구현됨으로서 컴퍼넌트에서 새로운 상태에 대한 리랜더링이 나타날 수 있게 된다.

- 상태 변화가 일어날 때마다 항상 위와 같은 데이터의 단방향 흐름을 통해서 컴퍼넌트의 변화가 나타난다.

## React Redux

리액트 리덕스가 무엇일까? 리덕스와 리액트 리덕스는 무엇이 다르길래 우리는 리덕스 뿐만 아니라 리액트 리덕스도 알아야할까?

### middleware

> 미들웨어는 리덕스 흐름상 어디에 위치하는지 다이어그램을 통해서 살펴보자.

![middleware](./screenshots/middleware.png)

리덕스에서 미들웨어가 1)무엇이고 이것이 2)왜 필요한지 알아보자. 나아가 코드적으로 3)어떻게 동작하는지에 대해서 살펴보자.

## Redux Toolkit

> 리덕스 툴킷을 이용한 `CRUD 앱`을 구현해보자.

> Preview

![preview](/screenshots/3_preview.gif)

<details>
  <summary>Features</summary>

- [x] apply redux-toolkit
- [x] posts CRUD
- mock server
  - [x] fake server 설정 : use json-server
  - [x] user : login/signup : use json-server-auth
- [x] CSS module system
- [x] apply concurrently
</details>

### Redux Toolkit API 정리

<details>
  <summary>APIs</summary>

- [createAction](./docs/redux-toolkit-api.md#createAction)
- [createReducer](./docs/redux-toolkit-api.md#createReducer)
- [configureStore](./docs/redux-toolkit-api.md#configureStore)
- [createSlice](./docs/redux-toolkit-api.md#createSlice)

</details>

## Redux Saga

## MobX

> 간단한 카운터를 바닐라 자바스크립트와 MobX 조합으로 만들면서 MobX를 알아보자.

Redux 다음으로 알려진 상태관리 라이브러리는 `MobX`이다. (두번째라고 해서 두번째로 좋다는 건 아니다. 개발환경에 따라서 맞는 기술을 사용하면 되는 것!!)

## MobX React

> 리액트에서 MobX를 이용한 간단한 TodoApp을 통해서 리액트에서 MobX의 사용방법에 대해서 알아보자.

## Recoil

# Ref

- [📺 Redux vs MobX](https://www.inflearn.com/course/redux-mobx-%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC-%EB%8F%84%EA%B5%AC)

  > 해당 프로젝트의 모티브를 제공한 강의

- [🗒 2021년 React 상태 관리 라이브러리 전쟁](https://mmsesang.tistory.com/entry/2021%EB%85%84-React-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EC%A0%84%EC%9F%81-Hooks-Redux-Recoil)

  > `상태 관리 툴` 세계의 큰 그림을 볼 수 있는 글

- [🗒 Redux Toolkit 공홈](https://redux-toolkit.js.org/)
