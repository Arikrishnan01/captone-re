import React from 'react'
import "../Components/header.css"
// import Avatar from '@mui/material/Avatar';
import {  useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();
  return (
    <>
    <header>
        <nav><h1 className='headerTitle'>EMAIL SENDER APP</h1>
          {/* <button className='headerLoginButton'>LOGIN</button> */}
        <div className="avtar">
            {/* <Avatar style={{background:"blue"}}>A</Avatar> */}
            <button 
              onClick={() => navigate('/login')}
              className='headerLoginButton'>LOGIN</button>
              {/* <Link to='/login'>
                 <button 
              className='headerLoginButton'>LOGIN</button>
              </Link> */}
        </div>
        </nav>
    </header>
    </>
  )
}

export default Header
