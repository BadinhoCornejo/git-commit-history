import React from "react";

import Moment from "react-moment";

import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import { CommitData } from "../models/commitData";

interface Props {
  commitData: CommitData;
  index: number;
}

export const CommitCard: React.FC<Props> = ({ commitData }) => {
  const { author, commit, html_url } = commitData;

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <a
            href={html_url}
            target="_blank"
            style={{ textDecoration: "none", color: "#000", cursor: "pointer" }}
          >
            {commit.message}
          </a>
        </Card.Title>
        <Card.Subtitle className="text-muted">
          <a href={author.html_url} target="_blank">
            <Image
              src={author.avatar_url}
              alt="avatar-user"
              style={{
                height: 20,
                width: 20,
                marginRight: "8px",
                cursor: "pointer",
              }}
              roundedCircle
            />
          </a>
          <a href={author.html_url} target="_blank" style={{ color: "#000" }}>
            {author.login}
          </a>{" "}
          commited <Moment fromNow>{commit.committer.date}</Moment>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};
