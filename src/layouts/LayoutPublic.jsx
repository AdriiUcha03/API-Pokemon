import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'

const LayoutPublic = () => {

  const navigation = useNavigation()
  console.log(useNavigation())

  return (
    <div className='container'>
      <Navbar />
      <div>
      {navigation.state === "loading" && (
          <div className="alert alert-info my-5">Loading...</div>
          )
      }
      </div>
      <Outlet />
      <footer>Footer</footer>
    </div>
  )
}

export default LayoutPublic