//Reference the Project.js to pull each JS file.

import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Password generator",
    languages: "js",
    image: "/images/PasswordGen.PNG",
    description: "Allows you create a randomized password",
    repo: "https://github.com/TristinNguyen/Challenge3-Password",
  },
  {
    id: 1,
    title: "WhatsForDinner",
    languages: "html, CSS, server-side API, js",
    image: "/images/Whatsfordinner.PNG",
    description: "Allows you to serach for recipes based on an ingredient or allows to randomize a cocktail",
    repo: "https://github.com/TristinNguyen/Whats-for-Dinner",
    live: "https://tristinnguyen.github.io/Whats-for-Dinner/",
  },
  {
    id: 2,
    title: "Weather Dashboard",
    languages: "html, css, js, ",
    image: "/images/WeatherDash.png",
    description: "Allows users to look for a 5 day forcast in any city",
    repo: "https://github.com/TristinNguyen/Weather-Dashboard",
  },
  {
    id: 3,
    title: "E-Commerce Backend",
    languages: "html, css, js, mySQL",
    image: "/images/Ecom.png",
    packages: "Express",
    description: "Creates a backend that utilizes a database so that users can keep track of products on an e-commerce site",
    repo: "https://github.com/TristinNguyen/E-Commerce-BackEND",
  },
  {
    id: 4,
    title: "Note Taker App",
    languages: "html, css, js",
    packages: "Express.js, Generate Unique IDs",
    image: "/images/NoteTaker.png",
    description: "Write extensive notes and keep track of tasks, then save them for later reading or deletion.",
    repo: "https://github.com/TristinNguyen/Note-Creation",
    live: "https://note-creation.herokuapp.com/",
  },
  {
    id: 5,
    title: "Bootcamp Overflow",
    languages: "html, css, JS, MySQL",
    packages: "handlebars, Sequalize ",
    image: "/images/Bootcamp.png",
    description: "A forum site that allows students in a coding bootcamp to talk to one another without fear of judgement due to annoynomous usernames. The forum site for beginner coders",
    repo: "https://github.com/TristinNguyen/Bootcamp-Overflow",
    live: "https://bootcampoverflow1.herokuapp.com/",
  },
  {
    id: 6,
    title: "Budget Tracker",
    languages: "html, css, js",
    packages: "Sequalize, Express",
    image: "/images/budget.png",
    description: "An app that allows uers to create a budget and save in locally. It allows for addition and subtraction of the budget",
    repo: "https://github.com/TristinNguyen/PWA-Budget-Tracker",
    live: "https://budgettracker113.herokuapp.com/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
