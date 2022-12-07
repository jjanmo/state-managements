import { filteringKeyAtom } from '@recoil/atom'
import { FilteringKeyType } from '@recoil/types'
import React from 'react'
import { useSetRecoilState } from 'recoil'
import * as S from './Filters.style'

function StatusSelector() {
  const setfilteringKey = useSetRecoilState(filteringKeyAtom)

  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const status = (e.target as HTMLButtonElement).id as FilteringKeyType
    setfilteringKey(status)
  }

  return (
    <>
      <S.FilterTitle>Filter by Status</S.FilterTitle>
      <S.Button type="button" active={false} id="all" onClick={handleClickButton}>
        All
      </S.Button>
      <S.Button type="button" active={false} id="active" onClick={handleClickButton}>
        Active
      </S.Button>
      <S.Button type="button" active={false} id="completed" onClick={handleClickButton}>
        Completed
      </S.Button>
    </>
  )
}

export default StatusSelector
