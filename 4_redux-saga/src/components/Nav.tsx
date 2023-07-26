import { Link } from 'react-router-dom'
import { RiTodoLine } from 'react-icons/ri'
import { MdOutlineCatchingPokemon } from 'react-icons/md'

export default function Nav() {
  return (
    <div className="absolute flex h-20 w-full items-center justify-between border-b-2 border-red-300 bg-orange-300 px-5 text-xl text-white">
      <div className="group">
        <Link to="/">
          <div className="font-serif tracking-wide">ReduxToolkit</div>
          {/* TODO : 라우팅이 변경될때 마다 rotate 애니메이션 추가 */}
          <div
            className={`rotate-180 border-b-4 font-mono tracking-tight duration-500 ease-out group-hover:border-red-300`}
          >
            ReduxSaga
          </div>
        </Link>
      </div>
      <div className="flex">
        <div className="px-3">
          <Link to="/todos">
            <RiTodoLine size="40" />
          </Link>
        </div>
        <div className="px-3">
          <Link to="/pokemon">
            <MdOutlineCatchingPokemon size="40" />
          </Link>
        </div>
      </div>
    </div>
  )
}
