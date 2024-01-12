import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Modal.css';

import projectSummaries from "../../assets/project_summaries.json";

const Modal = ({ }) => {

  {/* imageSrc, imageAlt, cardText, projectURL, githubURL, projectSummaryNum */ }
  const [imageSrc, setImageSrc] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [cardText, setCardText] = useState('');
  const [projectURL, setProjectURL] = useState('');
  const [githubURL, setGithubURL] = useState('');
  const [projectSummaryNum, setSumNum] = useState('');

  useEffect(() => {
    const modalElement = document.getElementById('projectModal');

    const handleShow = (event) => {
      console.log('Modal is about to show');
      // Your logic when the modal is about to show

      // Button that triggered the modal
      const button = event.relatedTarget;
      // Extract info from data-bs-* attributes
      setImageSrc(button.getAttribute('data-bs-imagesrc'));
      setImageAlt(button.getAttribute('data-bs-imagealt'));
      setCardText(button.getAttribute('data-bs-cardtext'));
      setProjectURL(button.getAttribute('data-bs-projecturl'));
      setGithubURL(button.getAttribute('data-bs-githuburl'));
      setSumNum(button.getAttribute('data-bs-projectsummarynum'));

    };

    if (modalElement) {
      modalElement.addEventListener('show.bs.modal', handleShow);

      return () => {
        modalElement.removeEventListener('show.bs.modal', handleShow);
      };
    }
  }, []);

  return (
    <div className="modal fade" id="projectModal" tabIndex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header justify-content-center">
            <h1 className="modal-title fs-5" id="projectModalLabel">{imageAlt}</h1>
          </div>
          <div className="modal-body">
            <div className='d-flex flex-column justify-content-center align-items-center'>

              <img
                src={imageSrc}
                className='rounded-img'
                style={{ width: '95%' }}
              />

              <div className='my-4 d-flex justify-content-between flex-grow-1'>
                <Link
                  to={projectURL}
                  target='_blank'
                  className=""
                >
                  Go To Website
                </Link>

                <a href={githubURL} target="_blank">
                  <svg className="" width="24" height="24" viewBox="0 0 24 24" stroke="green" fill="black">
                    {/* <path stroke="none" d="M0 0h24v24H0z" fill="black"></path> */}
                    <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z"></path>
                  </svg>
                </a>
              </div>

              {/* <div className='flex-grow-1 modalSummary'> */}
              <p
                className='flex-grow-1 modalSummary m-auto'
              >{projectSummaries[projectSummaryNum]}</p>
              {/* </div> */}

            </div>
          </div>
          <div className="modal-footer justify-content-center">
            <button
              type="button"
              className="btn btn-secondary rounded-btn"
              data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Modal;