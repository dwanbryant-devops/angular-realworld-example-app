// Production image: same origin. The ALB routes /api to the Go backend and / to this UI,
// so there is no environment-specific URL to bake in and no CORS.
export const environment = {
  apiUrl: '/api',
};
