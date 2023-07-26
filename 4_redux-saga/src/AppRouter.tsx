import Home from '@pages/Home'
import Pokemon from '@pages/Pokemon'
import TodoApp from '@pages/TodoApp'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/todos',
    element: <TodoApp />,
  },
  {
    path: '/pokemon',
    element: <Pokemon />,
  },
])
