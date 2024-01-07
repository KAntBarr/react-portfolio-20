import './AboutMe.css';
import selfie from "../../assets/me.png";

const AboutMe = ({ }) => {


  return (
    <div className='container text-center'>
      <div className='row'>
        <div className='col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
          <div className='d-flex justify-content-between align-items-end mb-2'>
            <h1 className='mt-4 mt-md-5 mb-3 ms-5 mx-md-0 text-md-start'>I'm Koby</h1>
            <img src={selfie} alt="A Pic of Koby" className="circle me-5" />
          </div>
          <p className='text-md-start ptext'>
            I fell in love with technology and computers when I was young after seeing all the cool stuff Tony Stark had in Iron Man. Being in this field feels natural to me because I have always excelled in math and enjoyed problem solving. Almost all areas interest me such as software development, embedded systems, machine learning, and etc. Although I have little work experience regarding my field, I am eager to learn and open to new opportunities that will enhance my skills in development and problem solving.
          </p>
          <h2 className='text-md-start mt-2 mb-3'>Past Education</h2>
          <p className='text-md-start ptext'>
            My past education includes...
          </p>
          <h2 className='text-md-start mt-2 mb-3'>Future Developments</h2>
          <p className='text-md-start ptext'>
            My plans for the future include...
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;