export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon2.png","fonts/Calgary.woff","fonts/Calgary.woff2","home-center.png","home-img.png","home-left.png","home-right.png","home-styling.png","logo.png","majo.png","organization.png"]),
	mimeTypes: {".png":"image/png",".woff":"font/woff",".woff2":"font/woff2"},
	_: {
		client: {"start":"_app/immutable/entry/start.4b6e4b7b.js","app":"_app/immutable/entry/app.7ee6531b.js","imports":["_app/immutable/entry/start.4b6e4b7b.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.09eb8490.js","_app/immutable/entry/app.7ee6531b.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.a21d6cee.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
