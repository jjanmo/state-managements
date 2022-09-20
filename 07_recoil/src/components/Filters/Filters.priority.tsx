import * as S from './Filters.style'
import { PRIORITY_COLOR } from '../../constants'

interface IProps {
  priority: string
}

function PriorityCheckbox({ priority }: IProps) {
  return (
    <S.PriorityLabel htmlFor={priority} color={PRIORITY_COLOR[priority]}>
      <input type="checkbox" name={priority} id={priority} />
      <div>{priority.toUpperCase()}</div>
    </S.PriorityLabel>
  )
}

export default PriorityCheckbox
