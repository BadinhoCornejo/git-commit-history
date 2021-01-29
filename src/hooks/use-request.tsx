import { useState } from "react";
import { CommitData } from "../models/commitData";
import { getCommits } from "../services/commits.service";

interface Props {
  url: string;
  method: "GET" | "POST" | "PATCH" | "PUT";
  body?: any;
  onSuccess?: (commits: CommitData[]) => void;
}

export const useRequest = ({ method, url, body, onSuccess }: Props) => {
  const [error, setError] = useState<{ message: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [commits, setCommits] = useState<CommitData[]>([]);

  const doRequest = async () => {
    try {
      setError(null);
      setCommits([]);
      setLoading(true);
      const response = await getCommits(url);
      setCommits(response);
      setLoading(false);
      if (onSuccess) {
        onSuccess(commits);
      }
    } catch (error) {
      setError(error.message);
      console.error(error.message);
    }
  };
  return { doRequest, error, commits, loading } as const;
};
