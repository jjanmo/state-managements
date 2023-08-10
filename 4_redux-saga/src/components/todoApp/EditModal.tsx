import { RootState } from '@/store'
import { Todo, actions } from '@/store/todoSlice'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

interface Props {
  id: string
  onClose: () => void
}

export default function EditModal({ id, onClose }: Props) {
  const todos = useSelector<RootState, Todo[]>((state) => state.todos)
  const [todo, setTodo] = useState<Todo>()
  useEffect(() => {
    const finded = todos.find((todo) => todo.id === id)
    setTodo(finded)
  }, [todos, id])

  const [value, setValue] = useState<string>('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(value)
  }

  const dispatch = useDispatch()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const payload = {
      id,
      content: value,
      done: todo?.done,
    }
    dispatch(actions.editTodo(payload))
    onClose()
  }

  return (
    <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center">
      <div
        className="absolute left-0 top-0 h-screen w-full bg-black opacity-70"
        onClick={onClose}
      ></div>
      <form
        className="relative z-10 flex h-72 w-[410px] flex-col items-start rounded-lg bg-purple-200 px-10 pt-8"
        onSubmit={handleSubmit}
      >
        <div className="w-full">
          <label className="font-mono text-xl font-semibold">Before</label>
          <div className="mt-1 w-full rounded-md bg-white px-2 py-1 text-lg">{todo?.content}</div>
        </div>

        <div className="mt-2 flex w-full flex-col">
          <label htmlFor="after" className="font-mono text-xl font-semibold">
            After
          </label>
          <input
            id="after"
            type="text"
            value={value}
            placeholder="변경할 할 일을 입력하세요"
            onChange={handleChange}
            className="mt-1 rounded-md px-2 py-1 text-lg outline-none"
            maxLength={20}
          />
        </div>

        <div className="mt-10 flex w-full flex-wrap">
          <input
            type="button"
            value="취소"
            onClick={onClose}
            className="w-1/2 cursor-pointer rounded-bl-lg rounded-tl-lg bg-red-300 py-2 text-lg text-white duration-300 ease-out hover:bg-red-400"
          />
          <input
            type="submit"
            value="수정"
            className="w-1/2 cursor-pointer rounded-br-lg rounded-tr-lg bg-purple-300 py-2 text-lg text-white duration-300 ease-out hover:bg-purple-400"
          />
        </div>
      </form>
    </div>
  )
}
