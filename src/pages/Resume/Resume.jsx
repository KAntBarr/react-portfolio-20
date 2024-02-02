import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Resume.css';

// import realResume from "../../../public/Resume-JanV1-24.pdf";
import realResume from "/KB-Resume.pdf?url";
import resumePic from "../../assets/resume.png";

const Resume = ({ }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const openPdfInNewTab = () => {
    // window.open('/Resume-JanV1-24.pdf', '_blank');
    window.open('/KB-Resume.pdf', '_blank');
  };

  return (
    <div className='container mt-4'>
      <div className='row justify-content-center mx-2'>

        <h1 className='text-center bordered-text'>Resume</h1>
        <div>

          <div className="card mx-auto" style={{ maxWidth: '500px' }}  >

            <div className="image-container-resume"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>

              <div className='overlay-text-resume card-img-top d-flex justify-content-center align-items-center'
                onClick={openPdfInNewTab}
              >
                {isHovered && <Link
                  to={'/public/KB-Resume.pdf'}
                  target='_blank'
                  className="a-nothead"
                >
                  View
                </Link>}
              </div>

              <img
                src={resumePic}
                className="card-img-top blur"
                alt="Resume"
              />

            </div>

            <div className="card-body d-flex flex-column align-items-center">
              <a
                href={realResume}
                download="koby_b_resume.pdf"
              >
                <button
                  className="btn btn-primary rounded-btn download-btn"
                  style={{ maxWidth: '10em' }}
                >
                  Download
                </button>
              </a>
              <p className="card-text mt-1">Last Updated: 02/01/2024</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Resume;