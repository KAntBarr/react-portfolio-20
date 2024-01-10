import './Portfolio.css';
import Project from "../../components/Project/Project.jsx";
import Modal from '../../components/Modal/Modal.jsx';

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
        <h2 className='mt-4 mt-md-5 mb-4 bordered-text'>Past Learning Experiences</h2>
        <div className='row align-items-center'>
          {/* <div className='col '> */}
            {/* <div className='d-flex justify-content-center'> */}
            <Project
              imageSrc={techBlog}
              imageAlt={'Tech Blog'}
              cardText={'Tech Blog'}
              projectURL={'https://tech-blog-ucb-92de467f20ab.herokuapp.com'}
              githubURL={'https://github.com/KAntBarr/tech-blog-14'}
              projectSummaryNum={0}
            />
            <Project
              imageSrc={weatherDashboard}
              imageAlt={'Weather Dashboard'}
              cardText={'Weather Dashboard'}
              projectURL={'https://kantbarr.github.io/weather-dashboard-6'}
              githubURL={'https://github.com/KAntBarr/weather-dashboard-6'}
              projectSummaryNum={1}
            />
            <Project
              imageSrc={drinkMovieCombo}
              imageAlt={'Drink Movie Combo'}
              cardText={'Drink Movie Combo'}
              projectURL={'https://ucb-allstars-project-1.github.io/movie-cocktail-combo'}
              githubURL={'https://github.com/ucb-allstars-project-1/movie-cocktail-combo'}
              projectSummaryNum={2}
            />
            <Project
              imageSrc={seniorProject}
              imageAlt={'Self Driving RC Car'}
              cardText={'Self Driving RC Car'}
              projectURL={'https://www.youtube.com/playlist?list=PLHFOvcVOvE2IlpS0oUwSvtJbdVLczmRdj'}
              githubURL={'https://github.com/csus-cpe190-191-team2/Team2'}
              projectSummaryNum={3}
            />
            <Project
              imageSrc={quizSite}
              imageAlt={'Quiz Site'}
              cardText={'Quiz Site'}
              projectURL={'https://kantbarr.github.io/js-quiz-site-4'}
              githubURL={'https://github.com/KAntBarr/js-quiz-site-4'}
              projectSummaryNum={4}
            />
            <Project
              imageSrc={geeksGarage}
              imageAlt={'Geeks Garage'}
              cardText={'Geeks Garage'}
              projectURL={'https://geeks-garage-alpha-4b07057e044e.herokuapp.com/'}
              githubURL={'https://github.com/ucb-geeks-garage-p2/geeks-garage'}
              projectSummaryNum={5}
            />
            {/* </div> */}
          {/* </div> */}
        </div>
      </div>


      <Modal 
        
      />
    </>
  );
}

export default Portfolio;