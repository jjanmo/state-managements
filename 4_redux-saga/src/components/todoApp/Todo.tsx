import { useState } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import Checkbox from './Checkbox'

interface Props {
  id: number
  content: string
  done: boolean
}

export default function Todo({ id, content }: Props) {
  const [checked, setChecked] = useState<boolean>(false)
  const handleChange = () => {
    setChecked((prev) => !prev)
  }
  const handleClickEdit = () => {
    console.log('edit')
  }
  const handleClickDelete = () => {
    console.log('delete')
  }

  return (
    <li className="relative my-3 flex w-full rounded-2xl px-3 font-sans text-xl text-gray-800 duration-300 ease-out hover:bg-slate-100">
      <Checkbox checked={checked} />
      <input id={String(id)} type="checkbox" className="hidden" onChange={handleChange} />
      <label htmlFor={String(id)} className="flex flex-1 cursor-pointer py-3 pl-8">
        <div className={`w-full pl-3 pr-16 ${checked && 'line-through decoration-purple-400'}`}>
          {content}
        </div>
      </label>
      <div className="absolute right-3 flex h-full w-12 items-center justify-between">
        <button onClick={handleClickEdit}>
          <AiFillEdit color={'#c8d6e5'} size={20} />
        </button>
        <button onClick={handleClickDelete}>
          <AiFillDelete color={'#c8d6e5'} size={20} />
        </button>
      </div>
    </li>
  )
}
