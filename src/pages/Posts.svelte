<script lang="ts">
	import { Octokit } from "@octokit/rest";
	import { writable } from "svelte/store";
	import type {
		GetResponseDataTypeFromEndpointMethod,
		OctokitResponse,
	} from "@octokit/types";
	import Markdown from "@magidoc/plugin-svelte-marked";
	type GithubIssue = GetResponseDataTypeFromEndpointMethod<
		typeof kit.issues.listForRepo
	>;
	type Posts = GithubIssue;
	const kit = new Octokit({
		auth: "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",
	});
	const postsStore = writable<Posts | null>(null);
	kit.rest.issues
		.listForRepo({
			owner: "jsorb84",
			repo: "svelte-discussions-blog",
		})
		.then((posts: OctokitResponse<GithubIssue>) => {
			let data: Posts = posts.data;
			postsStore.set(data);
		});
</script>

{#if $postsStore}
	{#each $postsStore as post}
		<hr />
		<span>{post.title}</span>
		<Markdown source="{post.body ?? ''}" />
		<hr />
	{/each}
{/if}
