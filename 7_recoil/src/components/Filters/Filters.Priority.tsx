import * as S from './Filters.style'
import { PRIORITY_COLOR } from '../../constants'
import { Priority } from '@recoil/types'
import { useCallback, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { filteringKeyAtom } from '@recoil/atom'

const priority: Priority[] = ['high', 'middle', 'low']

function PrioritySelector() {
  const [filteringKey, setFilteringKey] = useRecoilState(filteringKeyAtom)
  const [priorityKey, setPriorityKey] = useState<Priority | null>(null)

  useEffect(() => {
    const [pre, post] = filteringKey.split('/')

    if (pre === 'priority') {
      setPriorityKey(post as Priority)
    }
  }, [])

  const handleClick = useCallback(
    (priority: Priority) => () => {
      if (filteringKey && priorityKey === priority) {
        setFilteringKey(`status/all`)
        return
      }

      setFilteringKey(`priority/${priority}`)
    },
    [setFilteringKey, filteringKey, priorityKey]
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
            isActive={priorityKey === p}
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
