// Standalone build: no backend, no authentication, no Base44 API calls.
// The app runs fully client-side and all demo data lives in localStorage.
// This stub keeps platform boilerplate imports resolving without any
// network activity.
export const base44 = {
  app: {
    getPublicSettings: async () => ({ id: 'standalone', public_settings: {} }),
  },
  auth: {
    me: async () => null,
    logout: () => {},
    redirectToLogin: () => {},
  },
};
export default base44;