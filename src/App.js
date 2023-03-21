import React, { useState } from 'react'
import './App.css'

function App() {



  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleNameChange = (event) => {
    if (event.target.value.match("^[a-zA-Z ]*$") != null) {
      setName(event.target.value);
    }
  };
  const handleLastnameChange = (event) => {
    if (event.target.value.match("^[a-zA-Z ]*$") != null) {
      setLastname(event.target.value);
    }
  };
  const handlePasswordChange = (event) => {

    setPassword(event.target.value);

  };
  const handlePhoneChange = (event) => {
    if (event.target.value.match("[0-9]{10}") != null) {
      setPhone(event.target.value);
    }
  };

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');


  const onSubmit = e => {

    e.preventDefault()
    alert(
      "Email : " + `${email}` + "\n" +
      "Password : " + `${password}` + "\n" +
      "Name : " + `${name}` + "\n" +
      "Lastname : " + `${lastname}` + "\n" +
      "Phone Number : " + `${phone}`
    )


  }

  return (
    <div >
      <h2>REGISTER</h2>
      <form onSubmit={onSubmit} >
        <div >
          <label >Email address</label>
          <input
            type="email"
            required
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter email"
            name="email"

          />
        </div>
        <div>
          <label >Name</label>
          <input
            value={name}
            required


            type="text"
            onChange={handleNameChange}
            placeholder="Enter Name"
            name="name"
          />
        </div><div >
          <label >Lastname</label>
          <input
            value={lastname}
            required

            type="text"
            onChange={handleLastnameChange}
            placeholder="Enter Lastname"
            name="lastname"
          />
        </div>
        <div >
          <label >Phone Number</label>
          <input
            value={phone}
            required
            type="tel"
            onChange={handlePhoneChange}
            placeholder="Enter Phone Number"
            name="phone"
          />
        </div>

        <div>
          <label >Password</label>
          <input
            value={password}
            required

            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            name="password"
          />
        </div>

        <button type="submit">
          Submit
        </button>
      </form>


    </div>
  )
}

export default App