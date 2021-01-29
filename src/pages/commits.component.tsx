import React, { useCallback, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { CommitCard } from "../components/commit-card.component";
import { useRequest } from "../hooks/use-request";
import { repoUrl } from "../constants";

export const CommitsPage: React.FC = () => {
  const { doRequest, commits, error, loading } = useRequest({
    url: repoUrl,
    method: "GET",
  });

  const fetchCommits = useCallback(() => {
    doRequest();
  }, []);

  useEffect(() => {
    fetchCommits();
  }, []);

  const commitList = commits.map((commitData, index) => {
    return (
      <CommitCard
        key={commitData.commit.message}
        commitData={commitData}
        index={index}
      />
    );
  });

  const handleClick = () => {
    fetchCommits();
  };

  return (
    <Container>
      <Jumbotron>
        <h1 className="header">GitHub Commit History</h1>
        <p>
          <Button variant="primary" onClick={handleClick}>
            Fetch commits 🔥️
          </Button>
        </p>
      </Jumbotron>

      {error && <Alert variant="danger">{error}</Alert>}
      {loading ? <p>Loading...</p> : commitList}
    </Container>
  );
};
