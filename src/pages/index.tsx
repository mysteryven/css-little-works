import { Outlet } from 'react-router-dom'
import type { FC } from 'react'
import React from 'react'

const Main: FC = () => {
  return (
    <div>
      <p>nested about view:</p>
      <Outlet />
    </div>
  )
}

export default Main