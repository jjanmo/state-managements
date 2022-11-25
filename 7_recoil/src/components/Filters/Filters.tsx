import * as S from './Filters.style'
import Priority from './Filters.Priority'
import { useRecoilState } from 'recoil'
import { todoListAtom } from '../../recoil/todo/atom'
import React from 'react'
import { Todo } from '../../recoil/todo/types'

type ActionType = 'complete' | 'clear'

function Filter() {
  const [todoList, setTodoList] = useRecoilState<Todo[]>(todoListAtom)

  const handleClickActionButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const type = (e.target as HTMLDivElement).dataset.type as ActionType

    if (type === 'clear') {
      setTodoList((todoList) => todoList.filter((todo) => todo.status !== 'completed'))
    } else {
      setTodoList((todoList) => todoList.map((todo) => ({ ...todo, status: 'completed' })))
    }
  }

  return (
    <S.Container>
      <S.Column>
        <S.FilterTitle>Actions</S.FilterTitle>
        <S.Button data-type="complete" onClick={handleClickActionButton}>
          Mark All Completed
        </S.Button>
        <S.Button data-type="clear" onClick={handleClickActionButton}>
          Clear Completed
        </S.Button>
      </S.Column>

      <S.Column>
        <S.FilterTitle>Remaining Todos</S.FilterTitle>
        <S.LeftText>
          <em>{todoList.filter((todo) => todo.status === 'active').length}</em> item left
        </S.LeftText>
      </S.Column>

      <S.Column>
        <S.FilterTitle>Filter by Status</S.FilterTitle>
        <S.Button active={false}>All</S.Button>
        <S.Button active={false}>Active</S.Button>
        <S.Button active={false}>Completed</S.Button>
      </S.Column>

      <S.Column>
        <S.FilterTitle>Filter by Priority</S.FilterTitle>
        <S.PriorityContainer>
          <Priority />
        </S.PriorityContainer>
      </S.Column>
    </S.Container>
  )
}

export default Filter
