import dayjs from 'dayjs'

export default function Header() {
  const [date, dayOfWeek] = getToday()

  return (
    <div className="border-b-[1px] border-gray-200 px-10 pb-6 pt-12">
      <div>
        <h1 className="text-4xl font-bold">{date}</h1>
        <h3 className="pt-3 text-xl  text-gray-400">{dayOfWeek}</h3>
      </div>
      <div className="mt-4 text-xl text-purple-400">
        할 일 <span className="font-bold">{2}개</span> 남음
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
