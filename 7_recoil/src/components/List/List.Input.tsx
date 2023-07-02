import { useRecoilState } from 'recoil'
import * as S from './List.style'
import { todoListAtom } from '../../recoil/atom'
import { useForm } from 'react-hook-form'
import { Priority } from '@recoil/types'

interface FormData {
  value: string
  priority: Priority
}

function Input() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      value: '',
      priority: 'middle',
    },
  })

  const [todoList, setTodoList] = useRecoilState(todoListAtom)

  const onSubmit = (data: FormData) => {
    if (todoList.length === 7) {
      alert('이미 많은 할 일이 있네요 ~ 할 일을 마무리 짓고 추가하세요 😄')
      reset({
        value: '',
        priority: 'middle',
      })
      return
    }

    setTodoList((todoList) => [
      ...todoList,
      {
        id: Date.now(),
        value: data.value,
        status: 'active',
        priority: data.priority,
      },
    ])
    reset({
      value: '',
      priority: 'middle',
    })
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Wrapper>
        <S.Input
          autoComplete="off"
          type="text"
          placeholder="What needs to be done?"
          autoFocus
          {...register('value', {
            required: 'todo is required 🥲',
          })}
        />

        <S.RadioButtons>
          <S.Guide>Select todo's priority 🚀</S.Guide>
          <S.PriorityLabel htmlFor="high" isActive={watch('priority') === 'high'}>
            <S.RadioButton type="radio" id="high" value="high" {...register('priority')} />
            High
          </S.PriorityLabel>
          <S.PriorityLabel htmlFor="middle" isActive={watch('priority') === 'middle'}>
            <S.RadioButton type="radio" id="middle" value="middle" {...register('priority')} />
            Middle
          </S.PriorityLabel>
          <S.PriorityLabel htmlFor="low" isActive={watch('priority') === 'low'}>
            <S.RadioButton type="radio" id="low" value="low" {...register('priority')} />
            Low
          </S.PriorityLabel>
        </S.RadioButtons>
        <S.AddButton>ADD</S.AddButton>
      </S.Wrapper>
      {errors.value && <S.ErrorArea>{errors.value.message}</S.ErrorArea>}
    </S.Form>
  )
}

export default Input
