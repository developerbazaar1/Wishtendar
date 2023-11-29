import React from 'react'
import LeftAside from './LeftAside'
import RightAside from './RightAside'
import { Outlet } from 'react-router-dom'

const LayoutPage = () => {
  return (
    <>
    <LeftAside/>
    <Outlet />
    <RightAside/>
    </>
  )
}

export default LayoutPage;