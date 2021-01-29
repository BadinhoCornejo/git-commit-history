import { request } from "@octokit/request";
import { CommitData } from "../models/commitData";

export const getCommits = async (url: string) => {
  let commits: CommitData[] = [];
  const response = await request(`GET ${url}`);

  response.data.forEach((commitData: CommitData) => {
    const { author, commit, html_url } = commitData;
    commits.push({ author, commit, html_url });
  });

  return commits;
};
