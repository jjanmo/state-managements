import { RootState } from '@/store'
import { Todo } from '@/store/todosReducer'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

interface Props {
  id: string
  onClose: () => void
}

export default function Modal({ id, onClose }: Props) {
  const todos = useSelector<RootState, Todo[]>((state) => state.todos)
  const [todo, setTodo] = useState<Todo>()

  useEffect(() => {
    const finded = todos.find((todo) => todo.id === id)
    setTodo(finded)
  }, [todos, id])

  return (
    <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center">
      <div
        className="absolute left-0 top-0 h-screen w-full bg-black opacity-70"
        onClick={onClose}
      ></div>
      <form className="z-10 flex h-60 w-60 flex-col bg-purple-300">
        <label>
          Before
          <input type="text" value={todo?.content} readOnly />
        </label>
        <label>
          After
          <input type="text" placeholder="변경할 할 일" readOnly />
        </label>

        <div>
          <input type="button" value="취소" onClick={onClose} />
          <input type="submit" value="수정" />
        </div>
      </form>
    </div>
  )
}
