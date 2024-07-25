import React, { useContext } from 'react'
import { Context } from './GlobeData'
import Home from './Home';
// import LogIn from './LogIn';
// import SignUp from './SignUp';
import '../Assets/CSS/Navbar.css'

const Navbar = () => {
    const {Page,setPage,loggedIn} = useContext(Context);
  return (
    <div className='Base w-full h-screen bg-indigo-100 text-black'>
        <div className='Header w-auto mr-auto flex justify-center gap-10 h-20 bg-indigo-500 text-2xl'>
            <button style={{color:(Page === "Home")?"white":""}}onClick={(event)=>{event.preventDefault();setPage("Home")}}>Home</button>
            <button style={{color:(Page === "About")?"white":""}} onClick={(event)=>{event.preventDefault();setPage("About")}}>About</button>
            {/* <button style={{color:(Page === "SignUp")?"white":""}}onClick={(event)=>{event.preventDefault();setPage("SignUp")}}>SignUp</button> */}
            {(!loggedIn)?<><button className='btn btn-primary'>LogIn</button></>:null}
        </div>
        <div className='Body w-full h-auto justify-center flex'>
        {(Page === "Home")?<Home/>:null}
        {/* {(Page === "Login")?<LogIn/>:null}
        {(Page === "SignUp")?<SignUp/>:null} */}
        </div>
        <footer className='fixed bottom-1 left-0.5'>&copy;2024</footer>
    </div>
  )
}

export default Navbar