import { Home, Pokemon, TodoApp } from '@/pages'
import { createBrowserRouter } from 'react-router-dom'
import Counter from './pages/Counter'

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
    path: '/counter',
    element: <Counter />,
  },
  {
    path: '/pokemon',
    element: <Pokemon />,
  },
])
