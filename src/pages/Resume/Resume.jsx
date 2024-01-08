import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Resume.css';

import realResume from "../../../public/Resume-JanV1-24.pdf";
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
    window.open('/Resume-JanV1-24.pdf', '_blank');
  };

  return (
    <div className='container mt-4'>
      <div className='row justify-content-center mx-2'>

        <h2 className='text-center'>Resume</h2>
        <div>

          <div className="card mx-auto" style={{ maxWidth: '500px' }}  >

            <div className="image-container-resume"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>

              <div className='overlay-text-resume card-img-top d-flex justify-content-center align-items-center'>
                {isHovered && <Link
                  to={realResume}
                  target='_blank'
                  className=""
                >
                  View
                </Link>}
              </div>

              <img
                src={resumePic}
                className="card-img-top blur"
                alt="Resume"
                onClick={openPdfInNewTab}
              />

            </div>

            <div className="card-body d-flex flex-column align-items-center">
              <a
                href={realResume}
                download="koby_b_resume.pdf"
              >
                <button
                  className="btn btn-primary"
                  style={{ maxWidth: '10em' }}
                >
                  Download
                </button>
              </a>
              <p className="card-text mt-1">Last Updated: 01/06/2024</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Resume;