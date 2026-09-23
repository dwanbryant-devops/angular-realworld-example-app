import { HttpInterceptorFn } from '@angular/common/http';

// Same-origin API: in the cluster the ALB routes /api to the Go backend, so the UI
// needs no environment-specific URL and no CORS. `ng serve` proxies /api (proxy.conf.json).
export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const apiReq = req.clone({ url: `/api${req.url}` });
  return next(apiReq);
};
