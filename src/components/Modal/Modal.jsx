import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Modal.css';

import projectSummaries from "../../assets/project_summaries.json";

const Modal = ({ }) => {

  {/* imageSrc, imageAlt, cardText, projectURL, githubURL, projectSummaryNum */}
  const [imageSrc, setImageSrc] = useState('');
  const [imageAlt, setImageSrc] = useState('');
  const [cardText, setImageSrc] = useState('');
  const [projectURL, setImageSrc] = useState('');
  const [githubURL, setImageSrc] = useState('');
  const [projectSummaryNum, setImageSrc] = useState('');

  useEffect(() => {
    const modalElement = document.getElementById('projectModal'); // Replace with your modal ID

    const handleShow = () => {
      console.log('Modal is about to show');
      // Your logic when the modal is about to show
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
                className=''
                style={{ width: '95%' }}
              />
              <p
              className=''
              >{imageAlt}</p>
              <p
              id="cardText"
              className=''
              >{cardText}</p>
              <p
              id="imageSrc"
              className=''
              >testtt2</p>
              <a
              id="imageSrc"
              className=''
              >testtt3</a>
              <a
              id="imageSrc"
              className=''
              >testtt4</a>
              <p
              id="projectSummary"
              className=''
              >testtt5</p>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Modal;