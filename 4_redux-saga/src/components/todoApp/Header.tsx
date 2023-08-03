import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { Todo } from '@/store/todosReducer'

export default function Header() {
  const todos = useSelector<RootState, Todo[]>((state) => state.todos)
  const remainedTodos = todos.filter((todo) => !todo.done).length
  const [date, dayOfWeek] = getToday()

  return (
    <div className="border-b-[1px] border-gray-200 px-10 pb-6 pt-8">
      <h1 className="text-3xl font-bold">{date}</h1>
      <div className="mt-3 flex justify-between">
        <h3 className="text-xl text-gray-400">{dayOfWeek}</h3>
        <h3 className="text-xl text-purple-400">
          할 일 <span className="font-bold text-purple-500">{remainedTodos}개</span> 남음
        </h3>
      </div>
    </div>
  )
}

function getToday() {
  const now = dayjs()

  const dayOfWeekMap: { [key: number]: string } = {
    0: '월',
    1: '화',
    2: '수',
    3: '목',
    4: '금',
    5: '토',
    6: '일',
  }

  return [`${now.year()}년 ${now.month() + 1}월 ${now.date()}일`, `${dayOfWeekMap[now.day()]}요일`]
}
