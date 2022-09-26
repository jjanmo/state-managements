import * as S from './List.style'
import { Status, Todo as TodoType } from '../../recoil/todo/types'
import { useSetRecoilState } from 'recoil'
import { todoListAtom } from '../../recoil/todo/atom'
import { Priority } from '../../recoil/todo/types'
import React from 'react'
import { PRIORITY_COLOR } from '../../constants'

function Todo({ id, contents, status, priority }: TodoType) {
  const setTodoList = useSetRecoilState(todoListAtom)

  const handleClickDeleteButton = () => {
    const result = window.confirm('삭제 하시겠습니다?')

    if (result) {
      setTodoList((todoList) => todoList.filter((todo) => todo.id !== id))
    }
  }

  const handleChangeSelector = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as Priority

    setTodoList((todoList) =>
      todoList.map((todo) => (todo.id === id ? { ...todo, priority: value } : todo))
    )
  }

  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = Number(e.target.dataset.id)

    const changeStatus = (status: Status) => (status === 'active' ? 'completed' : 'active')
    setTodoList((todoList) =>
      todoList.map<TodoType>((todo) =>
        todo.id === id ? { ...todo, status: changeStatus(todo.status) } : todo
      )
    )
  }

  return (
    <S.Container>
      <S.TodoCheckbox
        type="checkbox"
        name={id + contents}
        id={id + contents}
        data-id={id}
        onChange={handleChangeCheckbox}
      />
      <S.TodoContents htmlFor={id + contents} color={PRIORITY_COLOR[priority]}>
        {contents}
      </S.TodoContents>

      <select name="priority" onChange={handleChangeSelector} defaultValue="normal">
        <option value="normal">Normal</option>
        <option value="high">High</option>
        <option value="middle">Middle</option>
        <option value="low">Low</option>
      </select>

      <S.TodoDeleteButton onClick={handleClickDeleteButton}>X</S.TodoDeleteButton>
    </S.Container>
  )
}

export default Todo
