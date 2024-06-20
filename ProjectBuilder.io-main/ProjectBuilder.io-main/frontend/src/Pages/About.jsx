import React from "react";
import '../Assets/style/About.css'

function About() {
  return (
    
    <main className="main">
      <div className="main_cont">
        <div>
          <div>
            <h2 className="h1">
              <b>About</b>
            </h2>
          </div>
          <div>
            <p className="h1">
              The project builder.io is a project encyclopedia that focuses on the
              information about the projects.
              <br />
              It supports the user with the information about various project
              ideas for the user.When a user inputs the technologies
              <br /> he/she knows and either web-based or app based,then the
              website gives the project title,detailed description
              <br /> about the title.
            </p>
          </div>
          <div>
            <h2 className="h1">
              <b>About Project developers</b>
            </h2>
          </div>
          
          <div>
            <h3 className="h2">
              Aniruddha.L-22I203(Backend and Frontend connectivity,Frontend)
            </h3>
            <h3 className="h2">Vyas.M-22I274(Frontend)</h3>
            <h3 className="h2">Sri Hari Krishna.BR-22I264(ProjectDB)</h3>
            <h3 className="h2">Shakthi Saravanan.R-22I255(WorksDB)</h3>
            <h3 className="h2">Siddharth.A-22I258(QueryDB)</h3>
            <h3 className="h2">Gowsalya.R-22I220(Frontend)</h3><br/><br/>
            <button className="btn">PREVIOUS</button>
          </div>
        </div>

        <img  alt="no image" className="image" />
      </div>
    </main>
  );
}

export default About;
