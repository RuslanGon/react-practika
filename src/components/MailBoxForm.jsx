import React from 'react'

const MailBoxForm = ({onAddUser}) => {

    const handleSubmit = (e) => {
      e.preventDefault();
      const userEmail = e.currentTarget.elements.userEmail.value;
      const userName = e.currentTarget.elements.userName.value;
      const formData = {userEmail, userName};
      onAddUser(formData)
      e.currentTarget.reset();
    };
    
  return (
    <form onSubmit={handleSubmit}>
        <h2>Add new user</h2>
        <label>
            <span>user email:</span>
            <br />
            <input type="email" name='userEmail' placeholder='your@email' required  />
        </label>
        <br />
        <label>
            <span>user name:</span>
            <br />
            <input type="text" name='userName' placeholder='name' required  />
        </label>
        <br />
        <button type='submit'>Create new user</button>
    </form>
  )
}

export default MailBoxForm