import { useState, useEffect } from 'react';
import './Contact.css';

const Contact = ({ }) => {

  const nameRegex = /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/;
  const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

  const [isNotName, setNotName] = useState(false);
  const [hasName, setHasName] = useState(false);
  const [isNotEmail, setNotEmail] = useState(false);
  const [hasEmail, setHasEmail] = useState(false);
  const [isNotMessage, setNotMessage] = useState(false);
  const [hasMessage, setHasMessage] = useState(false);
  const [isValid, setValid] = useState(false);
  const [isNew, setNew] = useState(true);
  const [showThanks, setThanks] = useState(false);

  useEffect(() => {
    const nameElement = document.getElementById('inputName');

    const handleInput = (event) => {
      const name = event.target.value.trim();
      if (nameRegex.test(name)) {
        setNotName(false);
        setHasName(true);
      } else {
        setHasName(false);
      }
    };

    if (nameElement) {
      nameElement.addEventListener('input', handleInput);

      return () => {
        nameElement.removeEventListener('input', handleInput);
      };
    }
  }, []);

  useEffect(() => {
    const emailElement = document.getElementById('inputEmail');

    const handleInput = (event) => {
      const email = event.target.value.trim();
      if (emailRegex.test(email)) {
        setNotEmail(false);
        setHasEmail(true);
      } else {
        setHasEmail(false);
      }
    };

    if (emailElement) {
      emailElement.addEventListener('input', handleInput);

      return () => {
        emailElement.removeEventListener('input', handleInput);
      };
    }
  }, []);

  useEffect(() => {
    const messageElement = document.getElementById('inputMessage');

    const handleInput = (event) => {
      // console.log('handling input');
      if (event.target.value.trim().length > 0) {
        setNotMessage(false);
        setHasMessage(true);
      } else {
        setHasMessage(false);
      }
    };

    if (messageElement) {
      messageElement.addEventListener('input', handleInput);

      return () => {
        messageElement.removeEventListener('input', handleInput);
      };
    }
  }, []);

  useEffect(() => {
    // console.log(`isNotName: ${!isNotName} | isNotEmail: ${!isNotEmail} | isNotMessage: ${!isNotMessage} | isNew: ${!isNew} | hasName: ${hasName} | hasEmail: ${hasEmail} | hasMessage: ${hasMessage} `)
    // console.log(isNotName);
    if (!isNotName && !isNotEmail && !isNotMessage && !isNew && hasName && hasEmail && hasMessage) { // work on submit button logic
      setValid(true);
    } else {
      setValid(false);
    }
  }, [isNotName, isNotEmail, isNotMessage, isNew, hasName, hasEmail, hasMessage])



  const handleName = (event) => {
    const name = event.target.value.trim();
    if (nameRegex.test(name)) {
      setNotName(false);
      setHasName(true);
      // console.log(isNotName, hasName);
    } else {
      setNotName(true);
      setHasName(false);
      // console.log(isNotName, hasName);
    }
    setNew(false);
  }

  const handleEmail = (event) => {
    const email = event.target.value.trim();
    if (emailRegex.test(email)) {
      setNotEmail(false);
      setHasEmail(true);
    } else {
      setNotEmail(true);
      setHasEmail(false);
    }
    setNew(false);
  }

  const handleMessage = (event) => {
    const message = event.target.value.trim();
    if (message.length < 1) {
      setNotMessage(true);
    } else {
      setNotMessage(false);
    }
    setNew(false);
  }

  const handleSubmission = (event) => {
    event.preventDefault();

    const resetThanks = () => {
      setThanks(false);
    }

    setThanks(true);
    setTimeout(resetThanks, 7500);

    document.getElementById("inputMessage").value = '';
    // setNew(true);
    setHasMessage(false);

    // event.target.reset();
  }


  return (
    <div className='container text-center'>
      <div className='row'>
        <div className='col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
          <form className='mt-4 mt-md-5 d-flex flex-column mx-3 flex-grow-1' onSubmit={handleSubmission}>
            <h1 className='bordered-text'>Contact Me</h1>
            <div className="mb-3 d-flex flex-column">
              <label htmlFor="inputName" className="form-label text-start">Name</label>
              <input type="name" className="form-control" id="inputName" onBlur={handleName}
                aria-describedby="nameHelp" />
              {isNotName && <div id="nameHelp" className="form-text text-start red-text bordered-text">A name must be provided</div>}
            </div>
            <div className="mb-3 d-flex flex-column">
              <label htmlFor="inputEmail" className="form-label text-start">Email Address</label>
              <input type="email" className="form-control" id="inputEmail" onBlur={handleEmail} aria-describedby="emailHelp" />
              {isNotEmail && <div id="emailHelp" className="form-text text-start red-text bordered-text">A valid email must be provided</div>}
            </div>
            <div className="mb-3 d-flex flex-column">
              <label htmlFor="inputMessage" className="form-label text-start">Message</label>
              <textarea type="message" className="form-control" id="inputMessage" onBlur={handleMessage} rows='4'
                aria-describedby="messageHelp" />
              {isNotMessage && <div id="messageHelp" className="form-text text-start red-text bordered-text">Input must be provided</div>}
            </div>
            {isValid
              ?
              <button
                type="submit"
                className="btn btn-primary rounded-btn mx-auto px-4">Submit</button>
              :
              <button
                type="submit"
                className="btn btn-primary rounded-btn mx-auto px-4" disabled>Submit</button>
            }
            {showThanks && <div id="messageHelp" className="form-text mt-3">The contact form is not fully functional yet, thank you for the message anyways!</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;