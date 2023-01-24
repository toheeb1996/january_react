import React from 'react'

const Register = () => {
  return (
    <div>
      <h3>This is a Registration form</h3>
      <form>
        <input type="text" placeholder='firstname'/>
        <input type="text" placeholder='surname' />
        <input type="text" placeholder='email' />
        <input type="button" value="register" />
      </form>
    </div>
  )
}

export default Register