import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import * as S from './List.style'
import { todoListAtom } from '../../recoil/todo/atom'
import { useForm } from 'react-hook-form'

function Input() {
  const { register } = useForm()

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
      <S.Wrapper>
        <S.Input
          type="text"
          placeholder="What needs to be done?"
          autoFocus
          onChange={handleChange}
          value={contents}
        />

        <S.RadioButtons>
          <S.Guide>Select your priority 🚀</S.Guide>
          <S.PriorityLabel htmlFor="high">
            <S.RadioButton type="radio" id="high" />
            High
          </S.PriorityLabel>
          <S.PriorityLabel htmlFor="middle">
            <S.RadioButton type="radio" id="middle" />
            Middle
          </S.PriorityLabel>
          <S.PriorityLabel htmlFor="low">
            <S.RadioButton type="radio" id="low" />
            Low
          </S.PriorityLabel>
        </S.RadioButtons>
      </S.Wrapper>
    </S.Form>
  )
}

export default Input
