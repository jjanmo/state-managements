import * as S from './Filters.style'
import PrioritySelector from './Filters.Priority'
import { useRecoilValue } from 'recoil'
import ActionsSelector from './Filters.Actions'
import StatusSelector from './Filters.Status'
import { todosStats } from '@recoil/selector'

function Filter() {
  const stats = useRecoilValue(todosStats)

  return (
    <S.Container>
      <S.Column>
        <ActionsSelector />
      </S.Column>

      <S.Column>
        <S.FilterTitle>Remaining Todos</S.FilterTitle>
        <S.LeftText>
          <em>{stats.active}</em> item left
        </S.LeftText>
        <S.FilterTitle>Completed Todos</S.FilterTitle>
        <S.LeftText>
          <em>{`${stats.completed}`}</em> item completed
          <br />
          <span className="percent">( {stats.completedPercent} )</span>
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
