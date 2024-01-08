import { useState, useEffect } from 'react';
import './Contact.css';

const Contact = ({ }) => {

  const nameRegex = /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/;
  const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

  const [isName, setName] = useState(false);
  const [isEmail, setEmail] = useState(false);
  const [isMessage, setMessage] = useState(false);
  const [isValid, setValid] = useState(false);
  const [isNew, setNew] = useState(true);

  useEffect(() => {
    if (!isName && !isEmail && !isMessage && !isNew) { // work on submit button logic
      setValid(true);
    } else {
      setValid(false);
    }
    
  }, [isName, isEmail, isMessage])

  // I think this might update after every state change
  useEffect(() => {

  });

  const handleName = (event) => {
    const name = event.target.value.trim();
    if (nameRegex.test(name)) {
      setName(false);
      // console.log("setting to false");
    } else {
      setName(true);
      // console.log("setting to true");
    }
    setNew(false);
  }

  const handleEmail = (event) => {
    const email = event.target.value.trim();
    if (emailRegex.test(email)) {
      setEmail(false);
    } else {
      setEmail(true);
    }
    setNew(false);
  }

  const handleMessage = (event) => {
    const message = event.target.value.trim();
    if (message.length < 1) {
      setMessage(true);
    } else {
      setMessage(false);
    }
    setNew(false);
  }

  const handleSubmission = (event) => {
    event.preventDefault();
    console.log('oh poops');
  }


  return (
    <div className='container text-center'>
      <div className='row'>
        <div className='col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
          <form className='mt-4 mt-md-5 d-flex flex-column mx-3 flex-grow-1' onSubmit={handleSubmission}>
            <h1>Contact Me</h1>
            <div className="mb-3 d-flex flex-column">
              <label htmlFor="inputName" className="form-label text-start">Name</label>
              <input type="name" className="form-control" id="inputName" onBlur={handleName}
              aria-describedby="nameHelp" />
              {isName && <div id="nameHelp" className="form-text text-start">A name must be provided</div>}
            </div>
            <div className="mb-3 d-flex flex-column">
              <label htmlFor="inputEmail" className="form-label text-start">Email address</label>
              <input type="email" className="form-control" id="inputEmail" onBlur={handleEmail} aria-describedby="emailHelp" />
              {isEmail && <div id="emailHelp" className="form-text text-start">A valid email must be provided</div>}
            </div>
            <div className="mb-3 d-flex flex-column">
              <label htmlFor="inputMessage" className="form-label text-start">Message</label>
              <textarea type="message" className="form-control" id="inputMessage" onBlur={handleMessage} rows='4'
              aria-describedby="messageHelp" />
              {isMessage && <div id="messageHelp" className="form-text text-start">Input must be provided</div>}
            </div>
            {isValid 
            ? 
            <button 
            type="submit" 
            className="btn btn-primary mx-auto px-4">Submit</button> 
            : 
            <button 
            type="submit" 
            className="btn btn-primary mx-auto px-4" disabled>Submit</button>
            }
            <div id="messageHelp" className="form-text mt-3">Thank you for submitting a message</div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;