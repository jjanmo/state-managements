import * as S from './Filters.style'

function StatusSelector() {
  return (
    <>
      <S.FilterTitle>Filter by Status</S.FilterTitle>
      <S.Button active={false}>All</S.Button>
      <S.Button active={false}>Active</S.Button>
      <S.Button active={false}>Completed</S.Button>
    </>
  )
}

export default StatusSelector
