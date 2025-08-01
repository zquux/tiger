import { createBrowserRouter } from 'react-router-dom'

import { ROUTES } from '@/shared/model/index'

import { App } from '../App'

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: ROUTES.HOME,
        lazy: () => import('@/pages/home/ui/HomePage')
      },
      {
        path: ROUTES.LOGIN,
        lazy: () => import('@/pages/signin/ui/LoginPage')
      }
    ]
  }
])
