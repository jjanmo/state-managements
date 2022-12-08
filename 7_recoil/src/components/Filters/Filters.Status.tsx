import { filteringAtom } from '@recoil/atom'
import { Status } from '@recoil/types'
import React, { useCallback, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import * as S from './Filters.style'

function StatusSelector() {
  const [filteringKey, setFilteringKey] = useRecoilState(filteringAtom)
  const [status, setStatus] = useState<Status | null>()

  const [filterKey, condition] = filteringKey?.split('/') || []

  useEffect(() => {
    if (filterKey === 'status') {
      setStatus(status as Status)
    } else {
      setStatus(null)
    }
  }, [filterKey, status])

  const handleClickButton = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const status = (e.target as HTMLButtonElement).id as Status
      if (condition === status) {
        setFilteringKey(null)
        return
      }

      setStatus(status)
      setFilteringKey(`status/${status}`)
    },
    [setFilteringKey, condition]
  )

  return (
    <>
      <S.FilterTitle>Filter by Status</S.FilterTitle>
      <S.Button type="button" active={status === 'active'} id="active" onClick={handleClickButton}>
        Active
      </S.Button>
      <S.Button
        type="button"
        active={status === 'completed'}
        id="completed"
        onClick={handleClickButton}
      >
        Completed
      </S.Button>
    </>
  )
}

export default StatusSelector
