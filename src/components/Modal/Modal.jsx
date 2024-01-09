import { Link } from 'react-router-dom';
import './Modal.css';

const Modal = ({ imageSrc, imageAlt, cardText, projectURL, githubURL, projectSummary }) => {


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
                alt={imageAlt}
                style={{ width: '95%' }}
              />
              <p>testtt</p>
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