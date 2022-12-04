import * as S from './Filters.style'
import PrioritySelector from './Filters.Priority'
import { useRecoilValue } from 'recoil'
import { todoListAtom } from '../../recoil/atom'
import ActionsSelector from './Filters.Actions'
import StatusSelector from './Filters.Status'

function Filter() {
  const todoList = useRecoilValue(todoListAtom)

  return (
    <S.Container>
      <S.Column>
        <ActionsSelector />
      </S.Column>

      <S.Column>
        <S.FilterTitle>Remaining Todos</S.FilterTitle>
        <S.LeftText>
          <em>{todoList.filter((todo) => todo.status === 'active').length}</em> item left
        </S.LeftText>
      </S.Column>

      <S.Column>
        <StatusSelector />
      </S.Column>

      <S.Column>
        <PrioritySelector />
      </S.Column>
    </S.Container>
  )
}

export default Filter
