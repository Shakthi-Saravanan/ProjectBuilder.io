import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../Assets/style/login_up.css'

function Login_Reg({IdPasser}) {
  document.title = 'LOGIN/REGISTER'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [passwd, setPass] = useState('')
  const [r_passwd, setR_pass] = useState('')
  const [pno, setPno]= useState(0)
  const [cemail, setCemail] = useState('')
  const [cpass, setCpass] = useState('')
  const [success, setSucc] = useState(false)
  const [match, setMatch] = useState(0)

  const handleName = (e)=>{
    setName(e.target.value)
  }
  const handleEmail = (e)=>{
    if (!cemail) setEmail(e.target.value)
  }
  const handlePass = (e)=>{
    setPass(e.target.value)
  }
  const handleRPass = (e)=>{
    const check = e.target.value
    if (check === passwd) setR_pass(e.target.value)
  }
  const handlePno = (e)=>{
    setPno(e.target.value)
  }
  const handleCemail = (e)=>{
    setCemail(e.target.value)
  }
  const handleCPass = (e)=>{
    setCpass(e.target.value)
  }
  const handleLogin=()=>{
    const login = {'email':cemail, 'passwd':cpass}
    axios.get('http://localhost:5555/user').then((res)=>{
      console.log(res)
      const result = res.data
      for (var data of result){
        // console.log(data.paaswd)
        if (data.email === cemail && data.paaswd === cpass){
          setSucc(true)
          setMatch(data.uid)
          IdPasser(data.uid)
          break
        }
      }
    })
  }

  const handleRegister =() =>{
    const new_use = {
      'Name':name,
      'Email':email,
      'Pno':pno,
      'Passwd':passwd
    }
    // console.log(new_use)
    axios.post('http://localhost:5555/user', new_use).then((res)=>{
      console.log('user added')
    }).catch((err)=>{console.error(err)})
  }

  return (
      <ul className='form'>
        <li className='login'>
            <ul>
              <li className='uemail'>
                <div>
                  <label htmlFor="email">USER EMAIL: </label>
                  <input type="text" value={cemail} name='email' onChange={handleCemail}/>
                </div>
              </li>
              <li className='passwd'>
                <div>
                  <label htmlFor="passwd">PASSWORD: </label>
                  <input type="text" name='passwd' value={cpass} onChange={handleCPass}/>
                </div>
              </li>
              <button type='submit' onClick={handleLogin}>LOGIN</button>
              {(success === true)?<h1>Successfully logged in</h1> : console.log('false')}
            </ul>
        </li>
        <div className="line-sep"></div>
        <li className='register'>
          <ul >
            <li className='name '>
              <div>
                <label htmlFor="name">NAME: </label>
                <input type="text" name='name' value={name} onChange={handleName} />
              </div>
            </li>
            <li className='email'>
              <div>
                <label htmlFor="mail">EMAIL: </label>
                <input type="text" name='mail' value={email} onChange={handleEmail} />
              </div>
            </li>
            <li className='pno'> 
              <div>
                <label htmlFor="pno">PHONE NUMBER: </label>
                <input type="text" name='pno' value={pno} onChange={handlePno} />
              </div>
            </li>
            <li className='pass'>
              <div>
                <label htmlFor="pass">PASSWORD: </label>
                <input type="text" name="pass" value={passwd} onChange={handlePass} />
              </div>
            </li>
            <li className='pass_2'>
              <div>
                <label htmlFor="passwd_2">RETYPE PASSWORD: </label>
                <input type="text" name='passwd_2' value={r_passwd} onChange={handleRPass}/>
              </div>
            </li>
            <button type='submit' onClick={handleRegister}>REGISTER</button>
          </ul>
        </li>
      </ul>
  )
}

export default Login_Reg
