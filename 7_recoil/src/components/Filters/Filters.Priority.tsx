import * as S from './Filters.style'
import { PRIORITY_COLOR } from '../../constants'

const priority = ['high', 'middle', 'low']

function Priority() {
  return (
    <>
      {priority.map((p, i) => (
        <S.PriorityLabel key={i} htmlFor={p} color={PRIORITY_COLOR[p]}>
          <input type="checkbox" name={p} id={p} />
          <div>{p.toUpperCase()}</div>
        </S.PriorityLabel>
      ))}
    </>
  )
}

export default Priority
