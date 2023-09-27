import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import vitePluginSingleSpa from "vite-plugin-single-spa";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte(),
		vitePluginSingleSpa({
			serverPort: 5173,
			spaEntryPoint: "./index.html",
		}),
	],
});
