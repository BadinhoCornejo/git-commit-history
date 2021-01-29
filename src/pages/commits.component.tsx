import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

export const CommitsPage: React.FC = () => {
  return (
    <Jumbotron>
      <h1 className="header">GitHub Commit History Application</h1>
      <p>
        <Button variant="primary">Fetch commits! 🔥️</Button>
      </p>
    </Jumbotron>
  );
};
