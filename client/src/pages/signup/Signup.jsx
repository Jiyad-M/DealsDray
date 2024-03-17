import React from 'react'
import Header from '../../components/header/Header'

function Signup() {
  return (
    <div className="signup">
        <Header/>
        <div className="l-form">
        <form action="" method="post">
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Mobile no" />
          <input type="text" placeholder="passsword" />
          <input type="text" placeholder="conform passsword" />
          <button type="submit">Create Account</button>
          <h3>Already have an account</h3>
        </form>
      </div>
    </div>
  )
}

export default Signup