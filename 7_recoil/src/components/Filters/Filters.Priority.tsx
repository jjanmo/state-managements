import * as S from './Filters.style'
import { PRIORITY_COLOR } from '../../constants'
import { Priority } from '@recoil/types'
import { useCallback, useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { filteringKeyAtom } from '@recoil/atom'

const priority: Priority[] = ['high', 'middle', 'low']

function PrioritySelector() {
  const [selected, setSelected] = useState<Priority | null>(null)
  const setFilteringKey = useSetRecoilState(filteringKeyAtom)

  const handleClick = useCallback(
    (priority: Priority) => () => {
      if (selected && selected === priority) {
        setSelected(null)
        setFilteringKey(`status/all`)
        return
      }

      setSelected(priority)
      setFilteringKey(`priority/${priority}`)
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
