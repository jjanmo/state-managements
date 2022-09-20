import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import * as S from './List.style'
import { todoListAtom } from '../../recoil/todo/atom'

function Input() {
  const [contents, setContents] = useState('')
  const setTodoList = useSetRecoilState(todoListAtom)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setTodoList((todoList) => [
      ...todoList,
      {
        id: Date.now(),
        contents,
        status: 'active',
        priority: 'normal',
      },
    ])

    setContents('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setContents(value)
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        autoFocus
        onChange={handleChange}
        value={contents}
      />
    </S.Form>
  )
}

export default Input
