import { Outlet, useLocation } from 'react-router-dom'

// import { Background } from '@/widgets/background'
import { AppHeader } from '@/widgets/header'

import { ROUTES } from '@/shared/model'

export function App() {
  const location = useLocation()
  const isAuthPage =
    location.pathname === ROUTES.LOGIN || location.pathname === ROUTES.REGISTER
  return (
    <div className='bg-lightGray'>
      {!isAuthPage && <AppHeader />}
      {/* <Background /> */}
      <Outlet />
    </div>
  )
}
