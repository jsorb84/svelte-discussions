import Posts from "./pages/Posts.svelte";
import type { Route } from "svelte-router-spa";

const routes: Route[] = [
	{
		name: "/",
		component: Posts,
	},
];

export { routes };
