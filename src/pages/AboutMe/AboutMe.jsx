import './AboutMe.css';
import selfie from "../../assets/me.png";

const AboutMe = ({ }) => {


  return (
    <div className='container text-center'>
      <div className='row'>
        <div className='col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
          <div className='d-flex justify-content-between align-items-end mb-2 pe-5'>
            <h1 className='mt-4 mt-md-5 mb-3 ms-5 mx-md-0 text-md-start bordered-text'>I'm Koby</h1>
            <a className="me-5" target="_blank" href="https://www.linkedin.com/in/koby-barrett-74a22b1a6/">
              <img src={selfie} alt="A Pic of Koby" className="circle " />
            </a>
          </div>
          <p className='text-md-start mt-4 ptext'>
            I fell in love with technology and computers when I was young after seeing all the cool stuff Tony Stark had in Iron Man. Being in this field feels natural to me because I have always excelled in math and enjoyed problem solving. Almost all areas interest me such as software development, embedded systems, machine learning, and etc. Although I have little work experience regarding my field, I am eager to learn and open to new opportunities that will enhance my skills in development and problem solving.
          </p>
          <h2 className='text-md-start mt-2 mb-3 bordered-text'>Past Education</h2>
          <p className='text-md-start ptext'>
            I started learning programming by taking a course that only dealt with flow charts and pseudocode at Sac State. It wasn't until the next semester that I took an intro course where I started using my first programming language, Java. Java was used in most of my beginning upperdivision courses: Data Structures & Algorithms, Object Oriented & Graphics Programming, and Computer Theory. C was introduced to me in an embedded systems course, and was later primarily used in my intro and advanced operating systems courses. The advanced OS course had us build out an operating system in phases. This was my favorite course by far, I felt like I truly understood what was going on and would have loved to continue building that project. Maybe one day in the future, I'll build my own OS again. Just recently, I completed an online full-stack coding bootcamp through UC Berkeley Extension. It was an amazing experience, even as tiring as it may have been. Some of the most important things we learned were Javascript, React, RESTful/GraphQL APIs, SQL/NoSQL, Bootstrap and Material UI, Redux, etc. I don't feel that I truly got to master these topics due to the pace of the bootcamp, but I would love to continue learning more.
          </p>
          <h2 className='text-md-start mt-2 mb-3 bordered-text'>Future Developments</h2>
          <p className='text-md-start ptext'>
            My plans for the foreseeable future are to continue building myself up until I become a Software Engineer. This includes grinding leetcode, with a goal of one problem a day, and, to do an online self-paced course through Udacity to build my Java programming skills. To also improve my skills in my current position and also in general, I will be completing Google's Coursera's IT Professional certification. Following that I would like to obtain my CCNA and have this all done by the end of this year(2024). Maybe after completing the Udacity course, I'll look into using C for embedded systems/OS projects. We'll see!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;