import { useSetRecoilState } from 'recoil'
import { todoListAtom } from '../../recoil/atom'
import { Todo } from '../../recoil/types'
import * as S from './Filters.style'

type ActionType = 'complete' | 'clear' | 'active'

function ActionsSelector() {
  const setTodoList = useSetRecoilState<Todo[]>(todoListAtom)

  const handleClickActionButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const type = (e.target as HTMLDivElement).dataset.type as ActionType

    if (type === 'clear') {
      setTodoList((todoList) => todoList.filter((todo) => todo.status !== 'completed'))
    } else if (type === 'complete') {
      setTodoList((todoList) => todoList.map((todo) => ({ ...todo, status: 'completed' })))
    } else {
      setTodoList((todoList) => todoList.map((todo) => ({ ...todo, status: 'active' })))
    }
  }

  return (
    <>
      <S.FilterTitle>Actions</S.FilterTitle>
      <S.Button data-type="complete" onClick={handleClickActionButton}>
        Mark All Completed
      </S.Button>
      <S.Button data-type="active" onClick={handleClickActionButton}>
        Mark All Active
      </S.Button>
      <S.Button data-type="clear" onClick={handleClickActionButton}>
        Clear Completed
      </S.Button>
    </>
  )
}

export default ActionsSelector
