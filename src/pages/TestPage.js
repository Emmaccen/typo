import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const TestTemplateCard = () => {
  return (
    <div className="cardBackground">
      <div className="flexEnd">
        <span className="lightFont">5Mins</span>
      </div>
      <p>
        Another important reason for using the element prop in v6 is that is
        reserved for nesting routes. This is one of people's favorite features
        from v3 and @reach/router, and we're bringing it back in v6.
      </p>
    </div>
  );
};

const TestPage = () => {
  return (
    <div className="container2 padChildren">
      <div className="centered textCenter">
        <h2 className="title heading">
          Choose from our long list of template or C/P your own essay
        </h2>
      </div>
      <div className="flexEnd">
        <Link to="./start/3">
          <Button className="primaryColorBg" primary size="large">
            Create New
          </Button>
        </Link>
      </div>
      <div className="grid3 margin-t-b">
        <TestTemplateCard />
        <TestTemplateCard />
        <TestTemplateCard />
        <TestTemplateCard />
        <TestTemplateCard />
      </div>
    </div>
  );
};

export default TestPage;
