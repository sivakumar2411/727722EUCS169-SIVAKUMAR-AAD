import React, { useContext, useEffect } from 'react'
import { Context } from './GlobeData'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const{User,loggedIn,setPage} = useContext(Context);
    const navi = useNavigate();
  return (
    <div>
        {loggedIn?
        <>Hello {User?.uname}</>:
        <><button className='text-white w-20 border border-green-700 bg-green-500 rounded-md mt-20 cursor-pointer' onClick={(event)=>navi('/Sign')}>LogIn</button></>}
    </div>
  )
}

export default Home