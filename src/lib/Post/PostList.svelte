<script lang="ts">
	import type { Posts } from "../../types";
	import Markdown from "@magidoc/plugin-svelte-marked";
	export let posts: Posts;
</script>

{#each posts as post (post.id)}
	<div class="p-4">
		<hr />
		<div class="container p-9">
			<span class="text-3xl">{post.title}</span>
			<span>{new Date(post.created_at).toDateString()}</span>
			<div class="px-12"><Markdown source="{post.body ?? ''}" /></div>
		</div>
		<hr />
	</div>
{/each}
