import './Portfolio.css';
import Project from "../../components/Project/Project.jsx";

// import seniorProject from "../../assets/senior_project_rc-car.jpg";
// import seniorProject from "../../assets/senior_rc-car.png";
import seniorProject from "../../assets/senior_rc-cars.png";
import weatherDashboard from "../../assets/weather_dashboard.png";
import drinkMovieCombo from "../../assets/drink_movie_combo.jpg";
import geeksGarage from "../../assets/geeks_garage.png";
import techBlog from "../../assets/tech_blog.png";
import quizSite from "../../assets/quiz_site.png";

const Portfolio = ({ }) => {


  return (
    <>
      <div className='container text-center text-md-start'>
        <h2 className='mt-4 mt-lg-0 mb-4'>Past Learning Experiences</h2>
        <div className='row align-items-center'>
          {/* <div className='col '> */}
            {/* <div className='d-flex justify-content-center'> */}
            <Project
              imageAlt={'Tech Blog'}
              imageSrc={techBlog}
              cardText={'Tech Blog'}
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
              imageAlt={'Self Driving RC Car'}
              imageSrc={seniorProject}
              cardText={'Self Driving RC Car'}
            />
            <Project
              imageAlt={'Quiz Site'}
              imageSrc={quizSite}
              cardText={'Quiz Site'}
            />
            <Project
              imageAlt={'Geeks Garage'}
              imageSrc={geeksGarage}
              cardText={'Geeks Garage'}
            />
            {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Portfolio;