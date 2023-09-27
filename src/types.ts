import type { Endpoints } from "@octokit/types";

export type GithubIssueResponse =
	Endpoints["GET /repos/{owner}/{repo}/issues"]["response"];
export type Posts =
	Endpoints["GET /repos/{owner}/{repo}/issues"]["response"]["data"];
