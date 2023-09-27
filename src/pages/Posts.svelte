<script lang="ts">
	import type { Writable } from "svelte/store";

	import PostList from "../lib/Post/PostList.svelte";
	import { createPostsStore } from "../lib/Stores/Posts";
	import type { Posts } from "../types";
	const postsStore = createPostsStore();
</script>

{#if $postsStore}
	<PostList posts="{$postsStore}" />
{/if}
