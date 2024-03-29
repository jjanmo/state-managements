import { useState } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import Checkbox from './Checkbox'
import { Todo as TodoType, actions } from '@/store/todoSlice'
import { useDispatch } from 'react-redux'
import { createPortal } from 'react-dom'
import EditModal from './EditModal'

export default function Todo({ id, content }: TodoType) {
  const dispatch = useDispatch()

  const [checked, setChecked] = useState<boolean>(false)
  const [showEditModal, setShowEditModal] = useState<boolean>(false)

  const handleChange = () => {
    setChecked((prev) => !prev)
    dispatch(actions.updateStatus({ id }))
  }
  const handleClickEdit = () => {
    setShowEditModal((prev) => !prev)
  }
  const handleClickDelete = () => {
    const result = confirm('삭제하시겠어요?')
    if (result) {
      dispatch(actions.deleteTodo({ id }))
    }
  }

  const handleClickModal = () => {
    setShowEditModal((prev) => !prev)
  }

  return (
    <>
      <li className="relative my-3 flex w-full rounded-2xl px-3 font-sans text-xl text-gray-800 duration-300 ease-out hover:bg-slate-100">
        <Checkbox checked={checked} />
        <input id={id} type="checkbox" className="hidden" onChange={handleChange} />
        <label htmlFor={id} className="flex flex-1 cursor-pointer py-3 pl-8">
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

      {showEditModal &&
        createPortal(<EditModal id={id} onClose={handleClickModal} />, document.body)}
    </>
  )
}
