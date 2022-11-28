import * as S from './Filters.style'
import { PRIORITY_COLOR } from '../../constants'

const priority = ['high', 'middle', 'low']

function PrioritySelector() {
  return (
    <>
      <S.FilterTitle>Filter by Priority</S.FilterTitle>
      <S.PriorityContainer>
        {priority.map((p, i) => (
          <S.PriorityLabel key={i} htmlFor={p} color={PRIORITY_COLOR[p]}>
            <input type="checkbox" name={p} id={p} />
            <div>{p.toUpperCase()}</div>
          </S.PriorityLabel>
        ))}
      </S.PriorityContainer>
    </>
  )
}

export default PrioritySelector
