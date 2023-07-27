import { useState } from 'react'
import Todo from './Todo'

export default function Form() {
  const todos = [
    {
      id: 1,
      content: '리스트 만들기',
      done: true,
    },
    {
      id: 2,
      content: '알고리즘 문제 풀기',
      done: true,
    },
    {
      id: 3,
      content: 'API 컨트롤러 수정하기',
      done: false,
    },
    {
      id: 4,
      content: 'API 서버 배포하기',
      done: false,
    },
  ]

  const [isShowingForm, setIsShowingForm] = useState<boolean>(false)

  return (
    <ul className="relative px-6 py-8">
      {todos?.map((todo) => <Todo key={todo.id} {...todo} />)}

      {/* {isShowingForm && <Form />} */}
      <Form />
    </ul>
  )
}
