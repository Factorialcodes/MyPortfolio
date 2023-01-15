import React, {useState} from 'react'
import FormInput from '../FormInput/formInput.components'
import './hireme.styled.css'
// import {HeaderTopic} from '../../Services/about.styled'


const Hireme = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [username, setUsername] = useState('')

  const handleChange =()=>{
    setEmail('')
    // setEmail('')
  }
  const handleSubmit = e =>{
    e.preventDefault()
  }
  return (
    <>
        <div class="headerTopic">Hire Me</div>
        <div class="formbold-main-wrapper">
          <div class="formbold-form-wrapper">
            <form onSubmit={handleSubmit}>
              <div class="formbold-mb-5">
                <label for="name" class="formbold-form-label"> Full Name </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={e=>setUsername(e.target.value)}
                  // onCick={handleClick}
                  placeholder="Full Name"
                  class="formbold-form-input"
                />
              </div>

              <div class="formbold-mb-5">
                <label for="email" class="formbold-form-label"> Email Address </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  class="formbold-form-input"
                />
              </div>

              <div class="formbold-mb-5">
                <label for="subject" class="formbold-form-label"> Subject </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter your subject"
                  class="formbold-form-input"
                />
              </div>

              <div class="formbold-mb-5">
                <label for="message" class="formbold-form-label"> Message </label>
                <textarea
                  rows="6"
                  name="message"
                  id="message"
                  placeholder="Type your message"
                  class="formbold-form-input"
                ></textarea>
              </div>

              <div>
                <button class="formbold-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
    </>
  )
}

export default Hireme