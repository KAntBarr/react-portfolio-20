import './Contact.css';

const Contact = ({ }) => {


  return (
    <form className='mt-4 mt-md-5'>
      <h1>Contact Me</h1>
      <div className="mb-3">
        <label htmlFor="exampleInputName1" className="form-label">Name</label>
        <input type="name" className="form-control" id="exampleInputName1" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputMessage1" className="form-label">Message</label>
        <textarea type="message" className="form-control" id="exampleInputMessage1" />
      </div>
      {/* <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div> */}
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default Contact;