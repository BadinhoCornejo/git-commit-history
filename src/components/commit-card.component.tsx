import Moment from "react-moment";

import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import { CommitData } from "../models/commitData";

interface Props {
  commitData: CommitData;
  index: number;
}

export const CommitCard: React.FC<Props> = ({ commitData, index }) => {
  const { author, commit } = commitData;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{commit.message}</Card.Title>
        <Card.Subtitle className="text-muted">
          <Image
            src={author.avatar_url}
            alt="avatar-user"
            style={{ height: 20, width: 20, cursor: "pointer" }}
          />
        </Card.Subtitle>
        commited <Moment fromNow>{commit.committer.date}</Moment>
      </Card.Body>
    </Card>
  );
};
