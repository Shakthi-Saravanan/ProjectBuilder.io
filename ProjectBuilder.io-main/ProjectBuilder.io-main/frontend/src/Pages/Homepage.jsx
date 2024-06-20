import React from "react";
import '../Assets/style/About.css' 

function Homepage() {
  return (
    <>
      <main className="body">
        <div>
          <h1 className="h1">
            <b>PROJECT BUILDER.IO</b>
          </h1><br/><br/>
          <h3 className="h1">
            PROJECT OF PROJECTS FOR A PROJECT
          </h3>
          <br />
          <br />

          <label className="h1">
            Enter your reviews and opinions(optional)*
          </label>
          <br />
          <br />
          <br />

          <textarea className="textarea"/>
        </div>
        <img  alt="My Image" className="image" />
      </main>
      <footer>
        <h4 className="h4">@ All copyrights reserved 2024</h4>
      </footer>
    </>
  );
}

export default Homepage;
