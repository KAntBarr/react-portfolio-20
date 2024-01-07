import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

const Project = ({ imageSrc, imageAlt, cardText }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className='col-12 col-md-6 col-lg-4 mb-3'>
      <div className='d-flex justify-content-center'>
        <div className="card" style={{ width: '18rem' }}>
          <div className="image-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>

            {/* <img
              src={imageSrc}
              className="card-img-top"
              alt={imageAlt}
              style={{
                height: 'auto', // Maintain aspect ratio
                filter: isHovered ? 'brightness(150%)' : 'none', // Apply brightness filter on hover
              }}
            /> */}

            {/* <div className="text-overlay">
              {isHovered && <Link
                to="https://www.google.com"
                target='_blank'
                className=""
              >
                {imageAlt}
              </Link>}
            </div> */}

            <img
              src={imageSrc}
              className="card-img-top"
              alt={imageAlt}
              style={{
                
              }}
            />

            <div className='overlay-text card-img-top'>

            </div>

          </div>

          <div className="card-body">
            <p className="card-text">{cardText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;