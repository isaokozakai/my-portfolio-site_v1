import React from 'react';

const Project = () => (
  <section id="projects" className="container">
    <h2 className="headline">Projects</h2>
    <div className="row">
      <div className="col">
        <a href="https://isao-bulletin-board-service.herokuapp.com">
          <div className="card">
            <img src="images/Bulletin_Board_App.png" />
            <p>Technologies</p>
            <ul>
              <li>React/Redux</li>
              <li>Node.js/Express</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </a>
      </div>
      <div className="col">
        <div className="card">
        </div>
      </div>
      <div className="col">
        <div className="card">
        </div>
      </div>
    </div>
  </section>
)

export default Project;