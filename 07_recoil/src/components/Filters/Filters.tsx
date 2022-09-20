import * as S from './Filters.style'
import PriorityCheckbox from './Filters.priority'

const priority = ['high', 'middle', 'low']

function Filter() {
  return (
    <S.Container>
      <S.Column>
        <S.FilterTitle>Actions</S.FilterTitle>
        <S.Button active={false}>Mark All Completed</S.Button>
        <S.Button active={false}>Clear Completed</S.Button>
      </S.Column>
      <S.Column>
        <S.FilterTitle>Remaining Todos</S.FilterTitle>
        <S.LeftText>
          <em>1</em> item left
        </S.LeftText>
      </S.Column>
      <S.Column>
        <S.FilterTitle>Filter by Status</S.FilterTitle>
        <S.Button active={false}>All</S.Button>
        <S.Button active={false}>Active</S.Button>
        <S.Button active={false}>Completed</S.Button>
      </S.Column>
      <S.Column>
        <S.FilterTitle>Filter by Priority</S.FilterTitle>
        <S.PriorityContainer>
          {priority.map((p, i) => (
            <PriorityCheckbox key={i} priority={p} />
          ))}
        </S.PriorityContainer>
      </S.Column>
    </S.Container>
  )
}

export default Filter
