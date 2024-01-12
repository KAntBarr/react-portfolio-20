import { useState } from 'react';
import { Link } from 'react-router-dom';
// import Modal from '../Modal/Modal';
import './Project.css';

const Project = ({ imageSrc, imageAlt, cardText, projectURL, githubURL, projectSummaryNum }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => setIsHovered(false);

  return (
    <>
      <div className='col-12 col-md-6 col-lg-4 mb-3'>
        <div className='d-flex justify-content-center'>
          <div className="card card-special" style={{ width: '18rem' }}>
            <div className="image-container"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>

              {isHovered &&
                <div className='overlay-text card-img-top d-flex flex-column justify-content-center align-items-center'>
                  {isHovered && projectURL &&
                    <Link
                      to={projectURL}
                      target='_blank'
                      className="mb-4 a-nothead"
                    >
                      {imageAlt}
                    </Link>
                  }

                  {isHovered &&
                    <a href={githubURL} target="_blank">
                      <svg className="" width="24" height="24" viewBox="0 0 24 24" stroke="red" fill="black">
                        {/* <path stroke="none" d="M0 0h24v24H0z" fill="black"></path> */}
                        <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z"></path>
                      </svg>
                    </a>
                  }


                </div>
              }

              <img
                src={imageSrc}
                className="card-img-top"
                alt={imageAlt}
                data-bs-toggle="modal"
                data-bs-target="#projectModal"
                data-bs-imagesrc={imageSrc}
                data-bs-imagealt={imageAlt}
                data-bs-cardtext={cardText}
                data-bs-projecturl={projectURL}
                data-bs-githuburl={githubURL}
                data-bs-projectsummarynum={projectSummaryNum}
              />

            </div>
            <div className="card-body d-flex justify-content-between">
              <p className="card-text mb-0 project-name">{cardText}</p>
              <button
                className="btn btn-primary "
                data-bs-toggle="modal"
                data-bs-target="#projectModal"
                data-bs-imagesrc={imageSrc}
                data-bs-imagealt={imageAlt}
                data-bs-cardtext={cardText}
                data-bs-projecturl={projectURL}
                data-bs-githuburl={githubURL}
                data-bs-projectsummarynum={projectSummaryNum}
                style={{ lineHeight: 0 }}>...</button>
            </div>
          </div>
        </div>
      </div>

      {/* move this to a single place and have it load with dynamic values */}
      {/* <Modal 
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        cardText={cardText}
        projectURL={projectURL}
        githubURL={githubURL}
      /> */}
    </>
  );
}

export default Project;