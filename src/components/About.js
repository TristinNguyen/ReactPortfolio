// Recent Photo or Avatar
// Short Biography
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Highly adaptive learner and new Full-stack Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/images/Profile.jpg'} alt="Tristin Nguyen"/>
      <p className="content is-italic mt-4">
        I'm Tristin, a new bootcamp grad with a background in animal science pursing a career in software development. I am a highly effective communicator and
        understand the importance of working with others
      </p>
      <p className="content">
        I have a passion for learning and working with others to create a better and more positive work environment.
        In my previous field, I developed many skills in communicating not only with my peers but also with upper management in an effective manner.
      </p>
    </div>
  );
}

export default About;
