import { useState, useEffect } from 'react';
import './Contact.css';

const Contact = ({ }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // I think this updates only on the first page/state load
  useEffect(() => {
    
  }, [])

  // I think this might update after every state change
  useEffect(() => {

  });

  return (
    <div className='container text-center'>
      <div className='row'>
        <div className='col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
          <form className='mt-4 mt-md-5 d-flex flex-column mx-3 flex-grow-1'>
            <h1>Contact Me</h1>
            <div className="mb-3 d-flex flex-column">
              <label htmlFor="exampleInputName1" className="form-label text-start">Name</label>
              <input type="name" className="form-control" id="exampleInputName1" />
            </div>
            <div className="mb-3 d-flex flex-column">
              <label htmlFor="exampleInputEmail1" className="form-label text-start">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
            </div>
            <div className="mb-3 d-flex flex-column">
              <label htmlFor="exampleInputMessage1" className="form-label text-start">Message</label>
              <textarea type="message" className="form-control" id="exampleInputMessage1" rows='4' />
            </div>
            {/* <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div> */}
            <button type="submit" className="btn btn-primary mx-auto px-4">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;