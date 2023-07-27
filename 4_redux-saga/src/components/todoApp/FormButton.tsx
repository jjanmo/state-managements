import { BsPlusLg } from 'react-icons/bs'

interface Props {
  isShowingForm: boolean
  onClick: () => void
}

export default function FormButton({ onClick, isShowingForm }: Props) {
  return (
    <button
      className={`absolute bottom-0 left-1/2 flex h-20 w-20 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full opacity-80  duration-300 ease-in-out ${
        isShowingForm ? 'rotate-45 bg-red-400' : 'rotate-0 bg-purple-400'
      } hover:opacity-100`}
      onClick={onClick}
    >
      <BsPlusLg size={45} color="#fff" strokeWidth="0.9" />
    </button>
  )
}
