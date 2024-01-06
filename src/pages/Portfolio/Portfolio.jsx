import './Portfolio.css';
import Project from "../../components/Project/Project.jsx";

import seniorProject from "../../assets/senior_project_rc-car.jpg";
import weatherDashboard from "../../assets/weather_dashboard.png";
import drinkMovieCombo from "../../assets/drink_movie_combo.jpg";
import geeksGarage from "../../assets/geeks_garage.png";

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
              imageAlt={'Weather Dashboard'}
              imageSrc={weatherDashboard}
              cardText={'Weather Dashboard'}
            />
            <Project
              imageAlt={'Drink Movie Combo'}
              imageSrc={drinkMovieCombo}
              cardText={'Drink Movie Combo'}
            />
            <Project
              imageAlt={'Geeks Garage'}
              imageSrc={geeksGarage}
              cardText={'Geeks Garage'}
            />
            <Project
              imageAlt={'test'}
              imageSrc={''}
              cardText={'test'}
            />
            <Project
              imageAlt={'test'}
              imageSrc={''}
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