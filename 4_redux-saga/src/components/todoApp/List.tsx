import { useState } from 'react'
import Todo from './Todo'
import Form from './Form'
import FormButton from './FormButton'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { Todo as TodoType } from '@/store/todoSlice'

export default function List() {
  const todos = useSelector<RootState, TodoType[]>((state) => state.todos)

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
