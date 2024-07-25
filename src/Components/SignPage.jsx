import React, { useContext, useState } from 'react'
import LogIn from './LogIn';
import SignUp from './SignUp';
import { Context } from './GlobeData';
import '../Assets/CSS/SignPage.css'

const SignPage = () => {

    const {LogPage} = useContext(Context);

  return (
    <div className='w-full h-screen flex items-center justify-center text-black'>

        <div className='LogSignHolderDiv w-10/12 flex items-center justify-center h-3/4 rounded-lg bg-white gap-10'>
        {(LogPage)?
        <><div className='w-3/5 h-full LogInSideBar'></div><div className='w-2/5 h-full flex items-center justify-center'><LogIn/></div></>:
        <><div className='w-2/5 h-full flex items-center justify-center'><SignUp/></div><div className='w-3/5 h-full SignUpSideBar'></div></>}
        </div>

    </div>
  )
}

export default SignPage