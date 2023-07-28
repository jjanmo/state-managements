import { useEffect, useRef, useState } from 'react'

interface Props {
  isShowingForm: boolean
}

export default function Form({ isShowingForm }: Props) {
  const [value, setValue] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(value)
  }

  useEffect(() => {
    if (isShowingForm) {
      inputRef.current?.focus()
    }
  }, [isShowingForm])

  // TODO : form animation ?? addable??

  return (
    <form
      className="absolute bottom-0 left-0 flex h-[120px] w-full items-center justify-center rounded-b-2xl bg-gray-100 "
      onSubmit={handleSubmit}
    >
      <input
        ref={inputRef}
        placeholder="할 일을 입력 후, 엔터를 누르세요"
        type="text"
        onChange={handleChange}
        value={value}
        className="w-10/12 rounded-lg border-[1px] border-gray-200 px-3 py-3 text-lg text-gray-800 outline-none"
      />
    </form>
  )
}
