import { useState } from 'react'
import Todo from './Todo'
import Form from './Form'
import FormButton from './FormButton'

export default function List() {
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

  const handleClick = () => {
    setIsShowingForm((prev) => !prev)
  }

  return (
    <ul className="relative flex-1 px-6 py-2">
      {todos?.map((todo) => <Todo key={todo.id} {...todo} />)}

      {isShowingForm && <Form isShowingForm={isShowingForm} />}
      <FormButton onClick={handleClick} isShowingForm={isShowingForm} />
    </ul>
  )
}
