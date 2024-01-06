import './Project.css';

const Project = ({ imageSrc, imageAlt, cardText }) => {


  return (
    // <div className="card" style= {{width: '18rem'}}>
    //   <img src={imageSrc} className="card-img-top" alt={imageAlt} />
    //   <div className="card-body">
    //     <p className="card-text">{cardText}</p>
    //   </div>
    // </div>
    <div className='col-12 col-md-6 col-lg-4 mb-3'>
      <div className='d-flex justify-content-center'>
        <div className="card" style={{ width: '18rem' }}>
          <img src={imageSrc} className="card-img-top" alt={imageAlt} />
          <div className="card-body">
            <p className="card-text">{cardText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;