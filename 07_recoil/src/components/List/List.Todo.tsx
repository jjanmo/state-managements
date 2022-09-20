import * as S from './List.style'
import { ITodo } from '../../recoil/todo/types'

function Todo({ id, contents, status, priority }: ITodo) {
  return (
    <S.Container>
      <S.TodoCheckbox type="checkbox" name={id + contents} id={id + contents} />
      <S.TodoContents htmlFor={id + contents}>{contents}</S.TodoContents>

      <select name="priority">
        <option selected>Black</option>
        <option>High</option>
        <option>Middle</option>
        <option>Low</option>
      </select>

      <button>X</button>
    </S.Container>
  )
}

export default Todo
