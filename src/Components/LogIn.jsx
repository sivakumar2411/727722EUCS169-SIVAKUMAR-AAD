import React, { useContext, useEffect, useState } from 'react'
import { getData } from '../Assets/JSON/API';
import { Context } from './GlobeData';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {

    const {setPage,loggedIn,LOGIN,LOGOUT,SLP} = useContext(Context);
    
    const [user,setUser] = useState({uname:"",password:""});
    const [data,setData] = useState([]);
    const navi = useNavigate();

    useEffect(()=>{

        const Fetch = async() =>{
            
            await getData()
            .then((res)=>setData(res.data))
            .catch((error)=>console.log(error))

        }

        Fetch();

    },[])


    const LogInCheck =()=>
    {
        if(user.uname.length === 0)
        {
            alert("UserName cannot be empty");
        }
        else if(user.password.length === 0)
        {
            alert("Password cannot be empty");
        }
        else
        {
            const uindex =  data ? data.findIndex(({uname})=>uname === user.uname):-1;
            if(uindex === -1)
            {
                alert("Invalid UserName");
            }
            else if(data[uindex].password !== user.password)
            {
                alert("Invalid Password");

            }
            else
            {
                LOGIN(user);
                alert("Logged In Successfully");
                setPage('Home');
                navi('/Home');
            }
        }
    }

  return (
    <div className='w-full flex justify-center items-center'>
        {(loggedIn)?
        <><button onClick={(event)=>{event.preventDefault();LOGOUT()}} className='border  border-red-500 w-20 rounded-md bg-red-600 text-white '>LogOut</button></>:<>
        <div className='LogInBase h-full w-3/5 bg-white '>
            <form onSubmit={(event)=>{event.preventDefault();LogInCheck()}} className='flex flex-col gap-5 text-xl'>
                <label >UserName</label>
                <input className='input  input-bordered w-full max-w-xs bg-white' value={user.uname} placeholder='UserName' onChange={(event)=>setUser({...user,uname:event.target.value})}  type='text'/>
                <label >PassWord</label>
                <input className='input input-bordered w-full max-w-xs bg-white' value={user.password} placeholder='Password' onChange={(event)=>setUser({...user,password:event.target.value})} type='password'/>
                <button type='submit' className=' mb-5 border w-24 m-auto btn-success btn text-white'>LogIn</button>
            </form>
            <div className='mb-10 text-gray-400 m-auto w-4/5'>Create a New Account?<span className='text-sky-600 cursor-pointer w-auto' onClick={(event)=>SLP(false)}>SignUp</span></div>
        </div></>}
    </div>
  )
}

export default LogIn;