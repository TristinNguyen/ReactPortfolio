//Needs links to my Github, Linkedin, and a Third Platform?

import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Full Stack Development Portfolio</strong> - a React site by{" "}
          <a href="https://github.com/TristinNguyen" target="_blank" rel="noreferrer">
            Tristin Nguyen
          </a>
          .
          <hr />
          <a
            href="https://www.linkedin.com/in/tristinnguyen/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}{" "}
          <a>Nguye501@msu.edu</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
