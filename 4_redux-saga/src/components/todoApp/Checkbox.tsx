import { BsCheck2 } from 'react-icons/bs'

interface Props {
  checked: boolean
}

export default function Checkbox({ checked }: Props) {
  return (
    <div
      className={` absolute top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border-[2px] ${
        checked ? 'border-[#c084fc]' : 'border-gray-300'
      }`}
    >
      {checked && <BsCheck2 color={'#c084fc'} strokeWidth="0.9" />}
    </div>
  )
}
