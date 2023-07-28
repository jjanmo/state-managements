import { BsPlusLg } from 'react-icons/bs'

interface Props {
  isShowingForm: boolean
  onClick: () => void
}

export default function FormButton({ onClick, isShowingForm }: Props) {
  return (
    <button
      className={`absolute bottom-0 left-1/2 flex h-14 w-14 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full opacity-80  duration-300 ease-in-out ${
        isShowingForm ? 'rotate-45 bg-red-400' : 'rotate-0 bg-purple-400'
      } hover:opacity-100`}
      onClick={onClick}
    >
      <BsPlusLg size={28} color="#fff" strokeWidth="0.9" />
    </button>
  )
}
