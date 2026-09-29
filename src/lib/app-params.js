// Standalone build: no Base44 SDK, no token handling.
// Returns neutral params so existing imports keep working offline.
const isNode = typeof window === 'undefined';

const appParams = {
	appId: 'standalone',
	token: null,
	functionsVersion: null,
	...(isNode ? {} : { origin: window.location.origin }),
};

export { appParams };
export default appParams;