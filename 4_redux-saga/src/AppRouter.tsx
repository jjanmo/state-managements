import { Home, Pokemon, TodoApp } from '@/pages'
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
