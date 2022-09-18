import * as S from './Filters.style'
function Filter() {
  return (
    <S.Container>
      <S.Column>
        <S.FilterTitle>Actions</S.FilterTitle>
      </S.Column>
      <S.Column>
        <S.FilterTitle>Remaining Todos</S.FilterTitle>
      </S.Column>
      <S.Column>
        <S.FilterTitle>Filter by Status</S.FilterTitle>
      </S.Column>
      <S.Column>
        <S.FilterTitle>Filter by Color</S.FilterTitle>
      </S.Column>
    </S.Container>
  )
}

export default Filter
