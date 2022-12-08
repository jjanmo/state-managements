import * as S from './Filters.style'
import { PRIORITY_COLOR } from '../../constants'
import { Priority } from '@recoil/types'
import { useCallback, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { filteringAtom } from '@recoil/atom'

const priorityArr: Priority[] = ['high', 'middle', 'low']

function PrioritySelector() {
  const [filteringKey, setFilteringKey] = useRecoilState(filteringAtom)
  const [priority, setPriority] = useState<Priority | null>()

  const [filterKey, condition] = filteringKey?.split('/') || []

  useEffect(() => {
    if (filterKey === 'priority') {
      setPriority(priority as Priority)
    } else {
      setPriority(null)
    }
  }, [priority, filterKey])

  const handleClick = useCallback(
    (priority: Priority) => () => {
      if (filteringKey && condition === priority) {
        setFilteringKey(null)
        return
      }

      setPriority(priority)
      setFilteringKey(`priority/${priority}`)
    },
    [setFilteringKey, filteringKey, condition]
  )

  return (
    <>
      <S.FilterTitle>Filter by Priority</S.FilterTitle>
      <S.PriorityContainer>
        {priorityArr.map((p, i) => (
          <S.PriorityLabel
            key={i}
            htmlFor={`filter-${p}`}
            color={PRIORITY_COLOR[p]}
            isActive={priority === p}
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
