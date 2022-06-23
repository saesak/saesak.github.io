import adapter from "@sveltejs/adapter-static"; 

export default {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'docs',
			assets: 'docs',
			domain: null,
			jekyll: false,
			fallback: null,
			precompress: false
		}),
		paths: {
			base: '', //repo name
		}
	}
};

/* import adapter from "@sveltejs/adapter-static"; 
// was "@sveltejs/adapter-auto"

const dev = "production" === "development";

/** @type {import(""@sveltejs/kit").Config} */

/*const config = {
    kit: {
        adapter: adapter({
            pages: "docs",
            assets: "docs"
        })
		//,paths: {		}
    }
};

export default config;*/