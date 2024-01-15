import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";


function AboutInfo(){
    return (
        <Card className="quote-card-view">
          <Card.Body>
            <blockquote className="blockquote mb-3">
              <p style={{ textAlign: "justify" }}>
                Hi Everyone, I am <span className="purple">Mathenda Maphasha </span>
                from <span className="purple"> Pretoria, South africa.</span>
                <br />
                {/* I am currently employed as a software developer at Lorem.
                <br /> */}
                I am in the process of completing a BSc in Computer science at the University of Pretoria
                <br />
                <br />
                Apart from coding, some other activities that I love to do!
              </p>
              <ul>
                <li className="about-activity">
                  <ImPointRight /> Playing Games
                </li>
                <li className="about-activity">
                  <ImPointRight /> Photography
                </li>
                <li className="about-activity">
                  <ImPointRight /> Travelling
                </li>
              </ul>
    
              <p style={{ color: "rgb(155 126 172)" }}>
                "Progress is man's ability to complicate simplicity."{" "}
              </p>
              <footer className="blockquote-footer">Thor Heyerdahl
    </footer>
            </blockquote>
          </Card.Body>
        </Card>
      );
}

export default AboutInfo;