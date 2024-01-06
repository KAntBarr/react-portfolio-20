import './AboutMe.css';
import selfie from "../../assets/me.png";

const AboutMe = ({ }) => {


  return (
    <div className='container text-center'>
      <h1 className='text-md-start mt-2 mb-3'>I'm Koby <img src={selfie} alt="A Pic of Koby" className="circle" /></h1>
      <p className='mx-5'>
        I fell in love with technology and computers when I was young after seeing all the cool stuff Tony Stark had in Iron Man. Being in this field feels natural to me because I have always excelled in math and enjoyed problem solving. Almost all areas interest me such as software development, embedded systems, machine learning, and etc. Although I have little work experience regarding my field, I am eager to learn and open to new opportunities that will enhance my skills in development and problem solving.
      </p>
      <h2 className='text-md-start my-2'>Past Education</h2>
      <p>
        My past education includes...
      </p>
      <h2 className='text-md-start my-2'>Future Developments</h2>
      <p>
        My plans for the future include...
      </p>
    </div>
  );
}

export default AboutMe;