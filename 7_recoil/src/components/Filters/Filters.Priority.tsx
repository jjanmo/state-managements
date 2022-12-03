import * as S from './Filters.style'
import { PRIORITY_COLOR } from '../../constants'
import { Priority } from '@recoil/todo/types'
import { useCallback, useState } from 'react'

const priority: Priority[] = ['high', 'middle', 'low']

function PrioritySelector() {
  const [selected, setSelected] = useState<Priority | null>(null)

  const handleClick = useCallback(
    (priority: Priority) => () => {
      if (selected && selected === priority) {
        setSelected(null)
        return
      }

      setSelected(priority)
    },
    [selected]
  )

  return (
    <>
      <S.FilterTitle>Filter by Priority</S.FilterTitle>
      <S.PriorityContainer>
        {priority.map((p, i) => (
          <S.PriorityLabel
            key={i}
            htmlFor={`filter-${p}`}
            color={PRIORITY_COLOR[p]}
            isActive={selected === p}
          >
            <input type="checkbox" name="priority" id={`filter-${p}`} onClick={handleClick(p)} />
            <div>{p.toUpperCase()}</div>
          </S.PriorityLabel>
        ))}
      </S.PriorityContainer>
    </>
  )
}

export default PrioritySelector
