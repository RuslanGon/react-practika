import React from 'react'

const MailBoxForm = () => {
  return (
    <form>
        <h2>Add new user</h2>
        <label>
            <span>user email:</span>
            <br />
            <input type="email" name='userEmail' placeholder='your@name' required  />
        </label>
        <br />
        <button type='submit'>Create new user</button>
    </form>
  )
}

export default MailBoxForm