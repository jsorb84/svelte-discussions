import App from "./App.svelte";
import Layout from "./pages/Layout.svelte";
import Test from "./pages/Test.svelte";
import Posts from "./pages/Posts.svelte";
import type { Route } from "svelte-router-spa";
function userIsAdmin() {
	//check if user is admin and returns true or false
}

const routes: Route[] = [
	{
		name: "/",
		component: Layout,
	},
	{
		name: "/posts",
		component: Posts,
	},
	{
		name: "/test",
		component: Test,
	},
];

export { routes };
