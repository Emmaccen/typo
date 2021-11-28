import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "../styles/home.scss";
const Home = () => {
  return (
    <div className="homepageWrapper">
      <div className="landingContainer centered">
        <div className="jumbotron flex-space-btw container1">
          <div className="content">
            <div>
              <h1>
                Audit Your Typing Speed With{" "}
                <span className="primaryColor">"Typo"</span>
              </h1>
            </div>
            <Button className="largeBtn" size="large">
              Get Started
            </Button>
            <ul className="flexWrap">
              <li>Real time speed tracking</li>
              <li>In-time error checking</li>
              <li>Dashboard analytics</li>
              <li>Improvement suggestions</li>
              <li>Cave-hacking level Guaranteed </li>
            </ul>
          </div>
          <div className="flexEnd">
            <img alt="description" src="/assets/jetpack.svg"></img>
          </div>
        </div>
      </div>
      <div className="container2 padChildren">
        <div className="container1">
          <div className="flex-space-btw onboarding margin-t-b">
            <div className="textArea">
              <h2>
                Choose between our long list of templates or paste your own
              </h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout. It
                is a long established fact, layout. It is a long established
                fact
              </p>
              <Button size="large" className="smallBtn">
                Get Started
              </Button>
            </div>
            <div>
              <img alt="description" src="/assets/onboard1.svg"></img>
            </div>
          </div>
          <div className="flex-space-btw onboarding margin-t-b">
            <div>
              <img alt="description" src="/assets/onboard2.svg"></img>
            </div>
            <div className="textArea">
              <h2>Set a timer and take the challenge</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                layout. It is a long established fact layout. It is a long
                established fact
              </p>
              <Button size="large" className="smallBtn">
                Get Started
              </Button>
            </div>
          </div>
          <div className="flex-space-btw onboarding margin-t-b">
            <div className="textArea">
              <h2>Get results in real time</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                layout. It is a long established fact established fact
              </p>
              <Button size="large" className="smallBtn">
                Get Started
              </Button>
            </div>
            <div>
              <img alt="description" src="/assets/onboard3.svg"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
