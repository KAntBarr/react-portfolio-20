import './Portfolio.css';
import Project from "../../components/Project/Project.jsx";

import seniorProject from "../../assets/senior_project_rc-car.jpg"

const Portfolio = ({ }) => {


  return (
    <>
      <div className='container'>
        <h2 className='my-5'>Look at my portfolio</h2>
        <div className='row'>
          {/* <div className='col '> */}
            {/* <div className='d-flex justify-content-center'> */}
            <Project
              imageAlt={'Self Driving RC Car'}
              imageSrc={seniorProject}
              cardText={'Self Driving RC Car'}
            />
            <Project
              imageAlt={'test'}
              imageSrc={}
              cardText={'test'}
            />
            <Project
              imageAlt={'test'}
              imageSrc={}
              cardText={'test'}
            />
            <Project
              imageAlt={'test'}
              imageSrc={}
              cardText={'test'}
            />
            <Project
              imageAlt={'test'}
              imageSrc={}
              cardText={'test'}
            />
            <Project
              imageAlt={'test'}
              imageSrc={}
              cardText={'test'}
            />
            {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Portfolio;