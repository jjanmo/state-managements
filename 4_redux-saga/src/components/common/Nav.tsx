import { Link } from 'react-router-dom'
import { RiTodoLine } from 'react-icons/ri'
import { MdOutlineCatchingPokemon } from 'react-icons/md'
import { PiClockCounterClockwiseBold } from 'react-icons/pi'

export default function Nav() {
  return (
    <header className="flex h-20 w-full items-center justify-between border-b-2 border-red-300 bg-purple-300 px-10 text-xl text-white">
      <div className="group">
        <Link to="/">
          <div className="font-serif tracking-wide">ReduxToolkit</div>
          {/* TODO : 라우팅이 변경될때 마다 rotate 애니메이션 추가 */}
          <div
            className={`rotate-180 border-b-4 font-mono tracking-tight text-purple-400 duration-500 ease-out group-hover:border-red-300`}
          >
            ReduxSaga
          </div>
        </Link>
      </div>
      <div className="flex">
        {navItems.map((item) => (
          <LinkItem key={item.path} {...item} />
        ))}
      </div>
    </header>
  )
}

interface Item {
  path: string
  icon: React.ReactNode
}
function LinkItem({ path, icon }: Item) {
  return (
    <div className="mx-6 opacity-80 duration-200 ease-out hover:opacity-100">
      <Link to={path}>{icon}</Link>
    </div>
  )
}

const navItems: Item[] = [
  {
    path: '/todos',
    icon: <RiTodoLine size="40" />,
  },
  {
    path: '/counter',
    icon: <PiClockCounterClockwiseBold size="40" />,
  },
  {
    path: '/pokemon',
    icon: <MdOutlineCatchingPokemon size="40" />,
  },
]
