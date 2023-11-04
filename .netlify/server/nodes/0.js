

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.9b5e86bd.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.a21d6cee.js"];
export const stylesheets = ["_app/immutable/assets/0.48335deb.css"];
export const fonts = ["_app/immutable/assets/Calgary.419b48d1.woff2","_app/immutable/assets/Calgary.51ec81c0.woff"];
