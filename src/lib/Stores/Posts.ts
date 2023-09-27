import { writable, type Writable } from "svelte/store";
import type { GithubIssueResponse, Posts } from "../../types";
import { Octokit } from "@octokit/rest";

export function createPostsStore(): Writable<Posts> {
	const store = writable<Posts>([]);
	const kit = new Octokit({
		auth: import.meta.env.VITE_GITHUB_KEY,
	});

	kit.rest.issues
		.listForRepo({
			owner: "jsorb84",
			repo: "svelte-discussions",
		})
		.then((issues) => {
			store.set(issues.data);
		});

	return store;
}
