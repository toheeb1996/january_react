import React from 'react'

const Login = () => {
  return (
    <div>
      <h3>This is Login form</h3>
      <form>
        <input type="text" placeholder='email'/>
        <input type="text" placeholder='password' />
        <input type="button" value="submit" />
      </form>
    </div>
  )
}

export default Login