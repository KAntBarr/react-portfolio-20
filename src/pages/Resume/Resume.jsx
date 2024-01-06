import './Resume.css';

import realResume from "../../../public/Resume-JanV1-24.pdf";
import resumePic from "../../assets/resume.png";

const Resume = ({ }) => {


  return (
    <div className='container mt-4'>
      <div className='row justify-content-center mx-2'>

        <h2 className='text-center'>Resume</h2>

        <div>
          <div className="card mx-auto" style={{ maxWidth: '500px' }}>
            {/* <div className="card"> */}
            <img src={resumePic} className="card-img-top blur" alt="Resume" />
            <div className="card-body d-flex flex-column align-items-center">
              <button href="#" className="btn btn-primary" style={{ maxWidth: '10em' }}>Download</button>
              <p className="card-text mt-1">Last Updated: 01/06/2024</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Resume;