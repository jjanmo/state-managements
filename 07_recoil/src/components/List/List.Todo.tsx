import * as S from './List.style'
import { ITodo } from '../../recoil/todo/types'
import { useSetRecoilState } from 'recoil'
import { todoListAtom } from '../../recoil/todo/atom'

function Todo({ id, contents, status, priority }: ITodo) {
  const setTodoList = useSetRecoilState(todoListAtom)

  const handleClickDeleteButton = () => {
    const result = window.confirm('삭제 하시겠습니다?')

    if (result) {
      setTodoList((todoList) => todoList.filter((todo) => todo.id !== id))
    }
  }

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

      <S.TodoDeleteButton onClick={handleClickDeleteButton}>X</S.TodoDeleteButton>
    </S.Container>
  )
}

export default Todo
