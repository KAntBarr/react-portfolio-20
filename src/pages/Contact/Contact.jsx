import { useState, useEffect } from 'react';
import './Contact.css';

const Contact = ({ }) => {

  const [isName, setName] = useState(false);
  const [isEmail, setEmail] = useState(false);
  const [isMessage, setMessage] = useState(false);
  const [isValid, setValid] = useState(false);

  // I think this updates only on the first page/state load
  useEffect(() => {
    
  }, [])

  // I think this might update after every state change
  useEffect(() => {

  });

  const handleName = (event) => {
    console.log(event.target);
  }

  const handleEmail = (event) => {
    console.log(event.target);
  }

  const handleMessage = (event) => {
    console.log(event.target);
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
              <div id="nameHelp" className="form-text text-start">A name must be provided</div>
            </div>
            <div className="mb-3 d-flex flex-column">
              <label htmlFor="inputEmail" className="form-label text-start">Email address</label>
              <input type="email" className="form-control" id="inputEmail" onBlur={handleEmail} aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text text-start">A valid email must be provided</div>
            </div>
            <div className="mb-3 d-flex flex-column">
              <label htmlFor="inputMessage" className="form-label text-start">Message</label>
              <textarea type="message" className="form-control" id="inputMessage" onBlur={handleMessage} rows='4'
              aria-describedby="messageHelp" />
              <div id="messageHelp" className="form-text text-start">Input must be provided</div>
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