import React, { useContext, useEffect, useState } from 'react'
import { getData, postData } from '../Assets/JSON/API';
import { Context } from './GlobeData';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const {setPage,LOGIN,SLP} = useContext(Context);

    const [data, setData] = useState([]);


    const [user,setUser] = useState({uname:"",password:""});
    const [cp,scp] = useState("");
    const navi = useNavigate();

    useEffect(()=>{

        const Fetch = async() =>{
            
            await getData()
            .then((res)=>setData(res.data))
            .catch((error)=>console.log(error))

        }

        Fetch();

    },[])

    const Signup = async() =>{

        if(user.uname.length === 0)
        {
            alert("Username cannot be empty");
            return;
        }
        else if(user.password.length === 0)
        {
            alert("Password cannot be empty");
            return;
        }
        else if(cp.length === 0)
        {
            alert("Confirm Password cannot be empty");
            return;
        }
        else
        {
            if(user.password !== cp)
            {
                alert("Passwords do not match");
                return;
            }
            else{
                
            const exist =  data ? data.findIndex(({uname})=>uname === user.uname):-1;
            if(exist === -1)
            {
                await postData(user);
                LOGIN(user)
                alert("Registered Successfully");
                setPage('Home');
                navi('/Home');
            }
            else{
                alert("Username already exists");
                return;
            }

            }
        }

    }

  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <h1 className='text-2x'>SignUp</h1>
        <div className='LogInBase h-full w-3/5 bg-white '>
            <form onSubmit={(event)=>{event.preventDefault();Signup()}} className='flex flex-col gap-4 text-xl'>
                <label >UserName</label>
                <input className='input  input-bordered w-full max-w-xs bg-white' value={user.uname} placeholder='UserName' onChange={(event)=>setUser({...user,uname:event.target.value})}  type='text'/>
                <label >PassWord</label>
                <input className='input input-bordered w-full max-w-xs bg-white' value={user.password} placeholder='Password' onChange={(event)=>setUser({...user,password:event.target.value})} type='password'/>
                <label >Confirm PassWord</label>
                <input className='input input-bordered w-full max-w-xs bg-white' value={cp} placeholder='Password' onChange={(event)=>scp(event.target.value)} type='password'/>
                <button type='submit' className=' mb-5 border w-24 m-auto btn-primary btn text-white'>SignUp</button>
            </form>
            <div className='mb-10 text-gray-400 m-auto w-4/5'>Already Have an Account?<span className='text-green-500 cursor-pointer w-auto' onClick={(event)=>SLP(true)}>LogIn</span></div>
        </div>
    </div>
  )
}

export default SignUp